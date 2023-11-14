export interface IPointProps {
    id: string,
    x: number,
    y: number,
    value: number,
    onMouseOver: (startDate: Date) => void,
    onMouseOut: () => void,
    startDate: Date,
    color: string,
    highlighted: boolean,
    "data-testid"?: string;
}

export default IPointProps;
