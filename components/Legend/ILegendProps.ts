export interface ILegendItemProps {
    data: {
        id: string,
        name: string,
        color: string,
    }[],
    width: number,
    height: number,
    lineHeight: number,
    maxChars: number,
    highlightedId: string | null,
    onMouseOver: (id: string) => void,
    onMouseOut: () => void,
    "data-testid"?: string;
}

export default ILegendItemProps;