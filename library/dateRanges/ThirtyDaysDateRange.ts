import DayIntervalDateRange from "./DayIntervalDateRange";
import IDateRange from "./IDateRange";

class ThirtyDaysDateRange extends DayIntervalDateRange implements IDateRange {
    constructor(startMoment: any, parentDateRange: any, rootDateRange: any) {
        const endMoment = startMoment.clone().add(30, "days");
        super(startMoment, endMoment, parentDateRange, rootDateRange);
        this.chartEndDate = endMoment.clone().subtract(1, "days").toDate();
        this.title = `${this.pointDateFormat(startMoment)} - ${this.pointDateFormat(endMoment)}`;
        // this.translationKey = "last30Days";
    }
}

export default ThirtyDaysDateRange;
