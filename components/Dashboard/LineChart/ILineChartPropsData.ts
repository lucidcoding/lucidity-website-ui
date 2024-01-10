export interface ILineChartPropsData {
    dateRanges: Array<{
        startDate: Date;
        endDate: Date;
        value: number;
    }>;
    id: string;
    name: string;
}

export default ILineChartPropsData;
