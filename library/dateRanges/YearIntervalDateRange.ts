import * as d3 from "d3";
import Moment from "moment";
import Interval from "../../types/Interval";
import IDateRange from "./IDateRange";
import getTitle from "./titleHelper";
import TwelveMonthsDateRange from "./TwelveMonthsDateRange";

class YearIntervalDateRange implements IDateRange {
    public startDate: Date;
    public chartStartDate: Date;
    public endDate: Date;
    public chartEndDate: Date;
    public interval: Interval;
    public title: string;
    public numberOfXTicks: number;
    public parentDateRange: IDateRange | null;
    public rootDateRange: IDateRange;

    constructor(startMoment: any, endMoment: any, parentDateRange: IDateRange | null) {
        this.startDate = startMoment ? startMoment.toDate() : null;
        this.chartStartDate = startMoment ? startMoment.clone().startOf("year").toDate() : null;
        this.endDate = endMoment ? endMoment.toDate() : null;
        this.chartEndDate = endMoment ? endMoment.clone().startOf("year").toDate() : null;
        this.interval = Interval.year;
        this.parentDateRange = parentDateRange;
        this.rootDateRange = this;
        this.title = getTitle(startMoment, endMoment);
        this.numberOfXTicks = 2;
    }

    public xTicksFormat = (date: Date) => {
        if (date.getMonth() === 0) {
            return d3.timeFormat("%Y")(date);
        }

        return "";
    }

    public pointDateFormat = d3.timeFormat("%Y"); // tslint:disable-line:member-ordering

    public drillDown = (newStartDate: Date) =>
        new TwelveMonthsDateRange(Moment(newStartDate), this.rootDateRange, this)

    public zoomOut = () => null;
}

export default YearIntervalDateRange;
