export interface ILineChartProps {
    dateRange: {
        chartStartDate: Date,
        chartEndDate: Date,
        numberOfXTicks: number,
        xTicksFormat: () => void,
    },
    onPointClick: () => void,
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
