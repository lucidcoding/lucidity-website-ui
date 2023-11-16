export interface IXAxisProps {
    scale: any;
    chartHeight: number;
    chartWidth: number;
    tickFormat: any;
    orientation: "vertical" | "horizontal" | "diagonal";
    ticks: number;
    title: string;
    "data-testid"?: string;
}

export default IXAxisProps;
