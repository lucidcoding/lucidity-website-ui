export interface IBarChartProps {
    width: number,
    height: number,
    xAxisTitle: string,
    yAxisTitle: string,
    xAxisOrientation: "vertical" | "horizontal" | "diagonal",
    xAxisTickFormat: any,
    data: {
        id: string,
        name: string,
        value: number,
    }[],
    loaded: boolean,
    error?: string,
    onBarClick: (id: string, name: string) => void,
    "data-testid"?: string;
}

export default IBarChartProps;
