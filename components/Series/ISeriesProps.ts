export interface ISeriesProps {
    id: string,
    xScale: any,
    yScale: any,
    onMouseOver: (id: string) => void,
    onMouseOut: () => void,
    // onPointClick: () => void,
    data: {
        startDate: Date,
        value: number,
    }[],
    // pointDateFormat: () => void,
    color: string,
    highlighted: boolean,
    // activeTrends: string[]
    "data-testid"?: string;
}

export default ISeriesProps;
