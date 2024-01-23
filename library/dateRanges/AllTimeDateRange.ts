import IDateRange from "./IDateRange";
import YearIntervalDateRange from "./YearIntervalDateRange";

class AllTimeDateRange extends YearIntervalDateRange implements IDateRange {
    constructor() {
        super(null, null, null);
        this.title = "";
        this.numberOfXTicks = 4;
        // this.translationKey = "allTime";
        this.shortTitle = "All Time";
    }
}

export default AllTimeDateRange;
