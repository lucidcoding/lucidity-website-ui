import IDateRange from "./IDateRange";
import YearIntervalDateRange from "./YearIntervalDateRange";

class AllTimeDateRange extends YearIntervalDateRange implements IDateRange {
    constructor() {
        super(null, null, null);
        this.title = "";
        // this.translationKey = "allTime";
    }
}

export default AllTimeDateRange;
