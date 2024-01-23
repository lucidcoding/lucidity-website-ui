import * as d3 from "d3";
import Moment from "moment";
import Interval from "../../types/Interval";
import IDateRange from "./IDateRange";
import OneMonthDateRange from "./OneMonthDateRange";
import SixtyMinutesDateRange from "./SixtyMinutesDateRange";
import getTitle from "./titleHelper";

class HourIntervalDateRange implements IDateRange {
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
        this.chartStartDate = startMoment.clone().startOf("hour").toDate();
        this.endDate = endMoment.clone().toDate();
        this.chartEndDate = endMoment.clone().startOf("hour").toDate();
        this.interval = Interval.hour;
        this.numberOfXTicks = 24;
        this.parentDateRange = parentDateRange;
        this.rootDateRange = rootDateRange;
        this.title = getTitle(startMoment, endMoment);
        this.shortTitle = startMoment.format("DD");
    }

    public xTicksFormat = (date: Date) => {
        if (date.getHours() % 2 === 0 && date.getMinutes() === 0) {
            return d3.timeFormat("%H:%M")(date);
        }

        return "";
    }

    public pointDateFormat = (date: Date) => `${d3.timeFormat("%d")(date)} ` +
        `${d3.timeFormat("%b")(date)} ${d3.timeFormat("%Y %H:%M")(date)}`

    public drillDown = (startDate: Date): IDateRange => new SixtyMinutesDateRange(
        Moment(startDate), this, this.rootDateRange)

    public zoomOut = () => new OneMonthDateRange(
        Moment(this.startDate).clone().startOf("month"), this.parentDateRange, this.rootDateRange)

    public getChildDateRanges = () => {
        const childDateRanges: IDateRange[] = [];

        for (let hourIndex = 0; hourIndex <= 24; hourIndex++) {
            childDateRanges.push(
                new SixtyMinutesDateRange(Moment
                    (
                        new Date(
                            this.startDate.getFullYear(),
                            this.startDate.getMonth(),
                            this.startDate.getDate(),
                            hourIndex,
                            0,
                            0,
                        ),
                    ),
                    this.rootDateRange,
                    this,
                ),
            );
        }

        return childDateRanges;
    }
}

export default HourIntervalDateRange;
