import * as d3 from "d3";
import Moment from "moment";
import Interval from "../../types/Interval";
import AllTimeDateRange from "./AllTimeDateRange";
import IDateRange from "./IDateRange";
import OneMonthDateRange from "./OneMonthDateRange";
import getTitle from "./titleHelper";

class MonthIntervalDateRange implements IDateRange {
    public startDate: Date;
    public chartStartDate: Date;
    public endDate: Date;
    public chartEndDate: Date;
    public interval: Interval;
    public title: string;
    public shortTitle: string;
    public numberOfXTicks: number;
    public parentDateRange: IDateRange;
    public rootDateRange: IDateRange;

    constructor(startMoment: any, endMoment: any, parentDateRange: IDateRange, rootDateRange: IDateRange) {
        this.startDate = startMoment.clone().toDate();
        this.chartStartDate = startMoment.clone().startOf("month").toDate();
        this.endDate = endMoment.clone().toDate();
        this.chartEndDate = endMoment.clone().startOf("month").toDate();
        this.interval = Interval.month;
        this.numberOfXTicks = endMoment.diff(startMoment, "months");
        this.parentDateRange = parentDateRange;
        this.rootDateRange = rootDateRange;
        this.title = getTitle(startMoment, endMoment);
        this.shortTitle = startMoment.format("YYYY"); // this.startDate.getFullYear().toString();
    }

    public xTicksFormat = (date: Date) => {
        if (date.getDate() === 1) {
            return d3.timeFormat("%b")(date);
        }

        return "";
    }

    public pointDateFormat = (date: Date) =>
        `${d3.timeFormat("%b")(date)} ${d3.timeFormat("%Y")(date)}`

    public drillDown = (startDate: Date): IDateRange =>
        new OneMonthDateRange(Moment(startDate), this.parentDateRange, this.rootDateRange)

    public zoomOut = () => (this.rootDateRange ? this.rootDateRange : new AllTimeDateRange());

    public getChildDateRanges = () => {
        const childDateRanges: IDateRange[] = [];

        for (let monthIndex = 0; monthIndex <= 11; monthIndex++) {
            childDateRanges.push(
                new OneMonthDateRange(
                    Moment(new Date(this.startDate.getFullYear(), monthIndex, 1)),
                    this.rootDateRange,
                    this,
                ),
            );
        }

        return childDateRanges;
    }
}

export default MonthIntervalDateRange;
