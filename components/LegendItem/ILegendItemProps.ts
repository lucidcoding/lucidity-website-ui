export interface ILegendItemProps {
    id: string;
    name: string;
    color: string;
    onMouseOver: (id: string) => void;
    onMouseOut: () => void;
    lineHeight: number;
    boxHeight: number;
    highlighted: boolean;
    "data-testid": string;
}

export default ILegendItemProps;
