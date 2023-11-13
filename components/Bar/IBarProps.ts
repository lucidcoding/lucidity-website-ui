export interface IBarProps {
    id: string;
    name: string;
    value: number;
    x: number,
    y: number;
    width: number;
    height: number;
    onClick: (id: string, name: string) => void;
    "data-testid"?: string;
}

export default IBarProps;
