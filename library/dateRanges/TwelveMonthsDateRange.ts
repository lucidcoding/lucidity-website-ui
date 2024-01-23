import IDateRange from "./IDateRange";
import MonthIntervalDateRange from "./MonthIntervalDateRange";

class TwelveMonthsDateRange extends MonthIntervalDateRange implements IDateRange {
    constructor(startMoment: any, parentDateRange: IDateRange, rootDateRange: IDateRange) {
        const endMoment = startMoment.clone().add(12, "months");
        super(startMoment, endMoment, parentDateRange, rootDateRange);
        this.chartEndDate = endMoment.clone().subtract(1, "months").toDate();
        this.title = `${this.pointDateFormat(startMoment)} - ${this.pointDateFormat(endMoment)}`;
    }
}

export default TwelveMonthsDateRange;