import IDateRange from "./IDateRange";
import MinuteIntervalDateRange from "./MinuteIntervalDateRange";

class SixtyMinutesDateRange extends MinuteIntervalDateRange implements IDateRange {
    constructor(startMoment: any, parentDateRange: any, rootDateRange: any) {
        const endMoment = startMoment.clone().add(60, "minutes");
        super(startMoment, endMoment, parentDateRange, rootDateRange);
        this.chartEndDate = endMoment.clone().subtract(1, "minutes").toDate();
        this.title = `${this.pointDateFormat(startMoment)} - ${this.pointDateFormat(endMoment)}`;
        // this.translationKey = "last60Minutes";
    }
}

export default SixtyMinutesDateRange;
