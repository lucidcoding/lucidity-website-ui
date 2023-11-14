export interface IPointProps {
    id: string,
    x: number,
    y: number,
    //dateFormat: any,
    value: number,
    onMouseOver: (startDate: Date) => void,
    onMouseOut: () => void,
    onClick: any,
    startDate: Date,
    color: string,
    highlighted: boolean,
    "data-testid"?: string;
}

export default IPointProps;
