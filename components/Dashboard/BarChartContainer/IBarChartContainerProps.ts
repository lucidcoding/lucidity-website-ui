export interface IBarChartContainerProps {
    dateRange: {
        startDate: Date | null;
        endDate: Date | null;
    };
    tileId: string;
    width: number;
    height: number;
    onBarClick: (id: string, name: string) => void;
    "data-testid": string;
}

export default IBarChartContainerProps;
