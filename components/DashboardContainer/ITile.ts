export interface ITile {
    title: string;
    height: number;
    id: string;
    width: number;
    x?: number;
    y?: number;
    type: "gauge" | "bar" | "line" | "donut";
}

export default ITile;
