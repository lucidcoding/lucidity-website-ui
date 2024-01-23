import Interval from "../../types/Interval";

export interface IDateRange {
    startDate: Date;
    chartStartDate: Date;
    endDate: Date;
    chartEndDate: Date;
    interval: Interval;
    title: string;
    shortTitle: string;
    numberOfXTicks: number;
    parentDateRange: IDateRange | null;
    rootDateRange: IDateRange;
    xTicksFormat: (date: Date) => string;
    pointDateFormat: (date: Date) => string;
    drillDown: (newStartDate: Date) => IDateRange | null;
    getChildDateRanges: () => IDateRange[];
}

export default IDateRange;
