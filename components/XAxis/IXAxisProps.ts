export interface IXAxisProps {
    scale: any;
    chartHeight: number,
    chartWidth: number,
    chartMargin: {
        top: number,
        right: number,
        bottom: number,
        left: number,
    },
    tickFormat: any,
    orientation: string,
    ticks: number,
    title: string,
    "data-testid"?: string;
}

export default IXAxisProps;
