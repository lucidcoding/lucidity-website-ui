export interface ILineChartProps {
    dateRange: {
        chartStartDate: Date;
        chartEndDate: Date;
        numberOfXTicks: number;
        xTicksFormat: any;
    };
    onPointClick?: () => void;
    width: number;
    height: number;
    xAxisTitle: string;
    yAxisTitle: string;
    xAxisOrientation: "vertical" | "horizontal" | "diagonal";
    legendWidth: number;
    legendLineHeight: number;
    data: Array<{
        dateRanges: Array<{
            startDate: Date;
            endDate: Date;
            value: number;
        }>;
        id: string;
        name: string;
        color: string;
    }>;
    loaded: boolean;
    error?: string;
}

export default ILineChartProps;
