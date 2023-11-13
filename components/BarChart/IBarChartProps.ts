export interface IBarChartProps {
    width: number,
    height: number,
    margin: {
        top: number,
        right: number,
        bottom: number,
        left: number,
    },
    xAxisTitle: string,
    yAxisTitle: string,
    xAxisOrientation: string,
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
