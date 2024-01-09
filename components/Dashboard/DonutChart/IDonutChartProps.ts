export interface IDonutChartPropsData {
    id: string;
    name: string;
    value: number;
}

export interface IDonutChartProps {
    width: number;
    height: number;
    legendLineHeight: number;
    highlightedDataMaxChars: number;
    legendMaxChars: number;
    data: IDonutChartPropsData[];
    loaded: boolean;
    error: string;
    onSliceClick: (id: string, name: string) => void;
    "data-testid"?: string;
}

export default IDonutChartProps;
