export interface IDonutChartContainerProps {
    dateRange: {
        startDate: Date | null;
        endDate: Date | null;
    };
    tileId: string;
    width: number;
    height: number;
    "data-testid": string;
}

export default IDonutChartContainerProps;
