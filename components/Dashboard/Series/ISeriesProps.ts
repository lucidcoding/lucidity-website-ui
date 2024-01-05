export interface ISeriesProps {
    id: string;
    xScale: any;
    yScale: any;
    onMouseOver: (id: string) => void;
    onMouseOut: () => void;
    data: Array<{
        startDate: Date;
        value: number;
    }>;
    color: string;
    highlighted: boolean;
    "data-testid": string;
}

export default ISeriesProps;
