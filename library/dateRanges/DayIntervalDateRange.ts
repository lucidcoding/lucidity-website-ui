import * as d3 from "d3";
import Moment from "moment";
import Interval from "../../types/Interval";
import IDateRange from "./IDateRange";
import getTitle from "./titleHelper";
import TwelveMonthsDateRange from "./TwelveMonthsDateRange";
import TwentyFourHoursDateRange from "./TwentyFourHoursDateRange";

class DayIntervalDateRange implements IDateRange {
    public startDate: Date;
    public chartStartDate: Date;
    public endDate: Date;
    public chartEndDate: Date;
    public interval: Interval;
    public title: string;
    public numberOfXTicks: number;
    public parentDateRange: IDateRange;
    public rootDateRange: IDateRange;

    constructor(startMoment: any, endMoment: any, parentDateRange: IDateRange, rootDateRange: IDateRange) {
        this.startDate = startMoment.clone().toDate();
        this.chartStartDate = startMoment.clone().startOf("day").toDate();
        this.endDate = endMoment.clone().toDate();
        this.chartEndDate = endMoment.clone().startOf("day").toDate();
        this.interval = Interval.day;
        this.numberOfXTicks = 30;
        this.parentDateRange = parentDateRange;
        this.rootDateRange = rootDateRange;
        this.title = getTitle(startMoment, endMoment);
    }

    public xTicksFormat = (date: Date) => {
        if (date.getDay() === 1 && date.getHours() === 0 && date.getMinutes() === 0) {
            return d3.timeFormat("%d")(date);
        }

        return "";
    }

    public pointDateFormat = (date: Date) => `${d3.timeFormat("%d")(date)} ` +
        `${d3.timeFormat("%b")(date)} ${d3.timeFormat("%Y")(date)}`

    public drillDown = (startDate: Date): IDateRange =>
        new TwentyFourHoursDateRange(Moment(startDate).startOf("day"), this, this.rootDateRange)

    public zoomOut = () => (this.parentDateRange ? this.parentDateRange : new TwelveMonthsDateRange(
        Moment(this.startDate).startOf("year"), this.rootDateRange, this.parentDateRange))
}

export default DayIntervalDateRange;
