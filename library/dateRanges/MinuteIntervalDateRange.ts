import * as d3 from "d3";
import Moment from "moment";
import Interval from "../../types/Interval";
import IDateRange from "./IDateRange";
import getTitle from "./titleHelper";
import TwentyFourHoursDateRange from "./TwentyFourHoursDateRange";

class MinuteIntervalDateRange implements IDateRange {
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
        this.chartStartDate = startMoment.clone().startOf("minute").toDate();
        this.endDate = endMoment.clone().toDate();
        this.chartEndDate = endMoment.clone().startOf("minute").toDate();
        this.interval = Interval.minute;
        this.numberOfXTicks = 15;
        this.parentDateRange = parentDateRange;
        this.rootDateRange = rootDateRange;
        this.title = getTitle(startMoment, endMoment);
        this.shortTitle = startMoment.format("HH");
    }

    public xTicksFormat = (date: Date) => {
        if (date.getMinutes() % 10 === 0) {
            return d3.timeFormat("%H:%M")(date);
        }

        return "";
    }

    public pointDateFormat = (date: Date) => `${d3.timeFormat("%d")(date)} ` +
        `${d3.timeFormat("%b")(date)} ${d3.timeFormat("%Y %H:%M")(date)}`

    public drillDown = (startDate: Date): null => null;

    public zoomOut = () => (this.parentDateRange ? this.parentDateRange : new TwentyFourHoursDateRange(
        Moment(this.startDate).clone().startOf("day"), null, this.rootDateRange))

    public getChildDateRanges = () => {
        const childDateRanges: IDateRange[] = [];

        for (let minuteIndexIndex = 0; minuteIndexIndex <= 24; minuteIndexIndex++) {
            childDateRanges.push(
                new SixtyMinutesDateRange(
                    Moment(new Date(this.startDate.getFullYear(),
                        this.startDate.getMonth(),
                        this.startDate.getDate(),
                        this.startDate.getHours(),
                        this.startDate.getMinutes(), 0)),
                    this.rootDateRange, this,
                ),
            );
        }

        return childDateRanges;
    }
}

export default MinuteIntervalDateRange;
