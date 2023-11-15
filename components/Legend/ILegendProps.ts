export interface ILegendItemProps {
    data: Array<{
        id: string;
        name: string;
        color: string;
    }>;
    width: number;
    height: number;
    lineHeight: number;
    maxChars: number;
    highlightedId: string | null;
    onMouseOver: (id: string) => void;
    onMouseOut: () => void;
    "data-testid": string;
}

export default ILegendItemProps;
