import Interval from "../types/Interval";
import pageViewData from "./fake-fetch-data";

export type Response = {
    json: () => Promise<any>;
}

const filter = (data: any[], startDate: Date | null, endDate: Date | null) => {
    const filtered = data.filter((item: {
        ageGroup: {
            id: string,
            description: string,
        },
        engagementCount: number,
        date: string,
    }) => {
        if (startDate === null || endDate === null) {
            return true;
        }

        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
    });

    return filtered;
};

const ageGroupAggregator = (data: any[], startDate: Date | null, endDate: Date | null, interval: Interval) => {
    const filtered = filter(data, startDate, endDate);

    const grouped = filtered.map((item: {
        ageGroup: {
            id: string,
            description: string,
        },
        engagementCount: number,
        date: string,
    }) => {
        const returnValue = {
            id: item.ageGroup.id,
            name: item.ageGroup.description,
            value: item.engagementCount,
        };

        return returnValue;
    });

    const result: any[] = [];

    grouped.forEach((element) => {
        const target = result.find((x) => x.id === element.id);

        if (!target) {
            result.push({ ...element });
        }
        else {
            target.value += element.value;
        }
    });

    return result;
};

const ageGroupAndTimePeriodAggregator = (
    data: any[],
    startDate: Date | null,
    endDate: Date | null,
    interval: Interval) => {
    const filtered = filter(data, startDate, endDate);

    const grouped = filtered.map((item: any) => {
        const returnValue = {
            year: item.date.substring(0, 4),
            month: parseInt(item.date.substring(5, 7), 10) - 1,
            ageGroupDescription: item.ageGroup.description,
            ageGroupId: item.ageGroup.id,
            pageViews: item.engagementCount
        };

        return returnValue;
    });

    const result: {
        id: string,
        name: string,
        color: string,
        dateRanges: any[],
    }[] = [];

    grouped.forEach((element: any) => {
        const target = result.find(x => x.id === element.ageGroupId);

        if (!target) {
            result.push({
                color: "rgb(143, 95, 232)",
                dateRanges: [],
                id: element.ageGroupId,
                name: element.ageGroupDescription,
            });
        }
        else {
            let startDate: string;
            let endDate: string;

            if (interval === Interval.month) {
                startDate = new Date(element.year, element.month, 1, 0, 0, 0).toISOString();
                const daysInMonth = new Date(element.year, element.month + 1, 0).getDate();
                endDate = new Date(element.year, element.month, daysInMonth, 23, 59, 59).toISOString();
            }
            else {
                startDate = new Date(element.year, 0, 1, 0, 0, 0).toISOString();
                endDate = new Date(element.year, 11, 31, 23, 59, 59).toISOString();
            }

            const innerTarget = target.dateRanges.find(x => x.startDate.toISOString() === startDate);

            if (!innerTarget) {
                target.dateRanges.push({
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    value: element.pageViews
                })
            }
            else {
                innerTarget.value += element.pageViews;
            }
        }
    });

    return result;
};

const totalAggregator = (
    data: any[],
    startDate: Date | null,
    endDate: Date | null,
    interval: Interval) => {
    const filtered = filter(data, startDate, endDate);

    const total = filtered.reduce((accumulator: number, item: any) =>
        accumulator + item.engagementCount, 0);

    let maxValue: number;

    switch (interval) {
        case Interval.month:
            maxValue = 200000;
            break;
        case Interval.year:
        default:
            maxValue = 1000000;
            break;
    }

    return {
        maxValue,
        minValue: 0,
        value: total,
    };
};

const fetch = (url: string) => {
    const [root, filterString] = url.split("?");

    const filters = filterString
        ? filterString.split("&").map((item) => item.split("=")).map((item) => { return { field: item[0], value: item[1] }; })
        : [];

    const startDateFilter = filters.find((item) => item.field === "startDate");
    const endDateFilter = filters.find((item) => item.field === "endDate");
    const intervalFilter = filters.find((item) => item.field === "interval");
    const startDate = startDateFilter ? new Date(startDateFilter.value) : null;
    const endDate = endDateFilter ? new Date(endDateFilter.value) : null;
    const interval: Interval = intervalFilter ? parseInt(intervalFilter.value, 10) as Interval : Interval.year;

    let aggregator: (data: any[], startDate: Date | null, endDate: Date | null, interval: Interval) => any;

    switch (root) {
        case "/api/page-views/total":
            aggregator = totalAggregator;
            break;
        case "/api/page-views/by-age-group-and-date-range":
            aggregator = ageGroupAndTimePeriodAggregator;
            break;
        case "/api/page-views/by-age-group":
        default:
            aggregator = ageGroupAggregator;
            break;
    }

    const reducedData = aggregator(pageViewData, startDate, endDate, interval);

    return new Promise<Response>((resolve, reject) => {
        const response: Response = {
            json: () => new Promise<any>((jsonResolve, jsonReject) => {
                jsonResolve(reducedData);
            }),
        };

        resolve(response);
    });
};

export default fetch;
