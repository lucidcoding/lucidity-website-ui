import ILineChartPropsData from "./ILineChartPropsData";

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
    data: ILineChartPropsData[];
    loaded: boolean;
    error?: string;
    "data-testid": string;
}

export default ILineChartProps;
