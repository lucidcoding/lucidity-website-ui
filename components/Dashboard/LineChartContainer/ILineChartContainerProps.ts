import IDateRange from "../../../library/dateRanges/IDateRange";

export interface ILineChartContainerProps {
    dateRange: IDateRange;
    tileId: string;
    width: number;
    height: number;
    "data-testid": string;
}

export default ILineChartContainerProps;
