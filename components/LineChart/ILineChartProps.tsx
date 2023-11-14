export interface ILineChartProps {
    dateRange: {
        chartStartDate: Date,
        chartEndDate: Date,
        numberOfXTicks: number,
        xTicksFormat: any,
    },
    onPointClick: () => void,
    width: number,
    height: number,
    xAxisTitle: string,
    yAxisTitle: string,
    xAxisOrientation: "vertical" | "horizontal" | "diagonal",
    legendWidth: number,
    legendLineHeight: number,
    data: {
        dateRanges: {
            startDate: Date,
            endDate: Date,
            value: number,
        }[],
        id: string,
        name: string,
        color: string,
    }[],
    loaded: boolean,
    error?: string,
    /*colorSettings: {
        id: string,
        color: string,
    }[],
    activeTrends: string[],
    animate: boolean,*/
}

export default ILineChartProps;
