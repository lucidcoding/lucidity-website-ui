import DayIntervalDateRange from "./DayIntervalDateRange";
import IDateRange from "./IDateRange";

class OneMonthDateRange extends DayIntervalDateRange implements IDateRange {
    constructor(startMoment: any, parentDateRange: IDateRange, rootDateRange: IDateRange) {
        const endMoment = startMoment.clone().add(1, "month");
        super(startMoment, endMoment, parentDateRange, rootDateRange);
        this.chartEndDate = endMoment.clone().subtract(1, "days").toDate();
        this.title = `${this.pointDateFormat(startMoment)} - ${this.pointDateFormat(endMoment)}`;
        // this.translationKey = "oneMonth";
    }
}

export default OneMonthDateRange;
