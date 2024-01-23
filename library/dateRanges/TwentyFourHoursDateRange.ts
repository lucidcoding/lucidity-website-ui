import HourIntervalDateRange from "./HourIntervalDateRange";
import IDateRange from "./IDateRange";

class TwentyFourHoursDateRange extends HourIntervalDateRange implements IDateRange {
    constructor(startMoment: any, parentDateRange: any, rootDateRange: any) {
        const endMoment = startMoment.clone().add(24, "hours");
        super(startMoment, endMoment, parentDateRange, rootDateRange);
        this.chartEndDate = endMoment.clone().subtract(1, "hours").toDate();
        this.title = `${this.pointDateFormat(startMoment)} - ${this.pointDateFormat(endMoment)}`;
        // this.translationKey = "last24Hours";
    }
}

export default TwentyFourHoursDateRange;
