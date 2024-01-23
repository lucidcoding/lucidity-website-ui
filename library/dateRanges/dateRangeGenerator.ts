import Moment from "moment";
import AllTimeDateRange from "./AllTimeDateRange";
import TwelveMonthsDateRange from "./TwelveMonthsDateRange";
import ThirtyDaysDateRange from "./ThirtyDaysDateRange";
import TwentyFourHoursDateRange from "./TwentyFourHoursDateRange";
import SixtyMinutesDateRange from "./SixtyMinutesDateRange";
import YearIntervalDateRange from "./YearIntervalDateRange";
import MonthIntervalDateRange from "./MonthIntervalDateRange";
import DayIntervalDateRange from "./DayIntervalDateRange";
import HourIntervalDateRange from "./HourIntervalDateRange";
import MinuteIntervalDateRange from "./MinuteIntervalDateRange";
import IDateRange from "./IDateRange";

export const generateDefaultDateRanges = (baseDate: Date): IDateRange[] => {
    const baseMoment = Moment(baseDate);
    const startOf12MonthsAgo = baseMoment.clone().startOf("month").subtract(11, "months");
    const startOf30DaysAgo = baseMoment.clone().startOf("day").subtract(29, "days");
    const startOf24HoursAgo = baseMoment.clone().startOf("hour").subtract(23, "hours");
    const startOf60MinutesAgo = baseMoment.clone().startOf("minute").subtract(59, "minutes");
    const allTimeDateRange = new AllTimeDateRange();
    const twelveMonthsDateRange = new TwelveMonthsDateRange(startOf12MonthsAgo, null, allTimeDateRange);

    const thirtyDaysDateRange =
        new ThirtyDaysDateRange(startOf30DaysAgo, twelveMonthsDateRange, allTimeDateRange);

    const twentyFourHoursDateRange =
        new TwentyFourHoursDateRange(startOf24HoursAgo, thirtyDaysDateRange, allTimeDateRange);

    const sixtyMinutesDateRange =
        new SixtyMinutesDateRange(startOf60MinutesAgo, twentyFourHoursDateRange, allTimeDateRange);

    return [
        allTimeDateRange,
        twelveMonthsDateRange,
        thirtyDaysDateRange,
        twentyFourHoursDateRange,
        sixtyMinutesDateRange,
    ];
};

export const generateCustomDateRange = (startDate: Date, endDate: Date) => {
    /*let dateRange;
    const startDateMoment = Moment(startDate);
    const endDateMoment = Moment(endDate);
    const differenceInMinutes = endDateMoment.diff(startDateMoment, "minutes");

    if (differenceInMinutes <= 60) {
        dateRange = new MinuteIntervalDateRange(startDateMoment, endDateMoment, null, null);
    } else if (differenceInMinutes <= 1440) {
        dateRange = new HourIntervalDateRange(startDateMoment, endDateMoment, null, null);
    } else if (differenceInMinutes <= 43200) {
        dateRange = new DayIntervalDateRange(startDateMoment, endDateMoment, null, null);
    } else if (differenceInMinutes <= 525600) {
        dateRange = new MonthIntervalDateRange(startDateMoment, endDateMoment, null, null);
    } else {
        dateRange = new YearIntervalDateRange(startDateMoment, endDateMoment, null, null);
    }

    return dateRange;*/
    return null;
};

export default { generateDefaultDateRanges, generateCustomDateRange };
