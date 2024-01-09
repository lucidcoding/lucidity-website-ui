export interface ISliceProps {
    id: string;
    name: string;
    sliceData: {
        index: number;
        data: {
            id: string;
        };
    };
    selectedRadius: number;
    standardRadius: number;
    color: string;
    onMouseOver: (id: string) => void;
    onMouseOut: (id: string) => void;
    onClick: (id: string, name: string) => void;
    "data-testid"?: string;
}

export default ISliceProps;
