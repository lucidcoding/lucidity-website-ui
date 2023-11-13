import React from "react";

export interface ITile {
    children?: React.ReactElement;
    content: string;
    height: number;
    id: string;
    width: number;
    x?: number;
    y?: number;
    type: "gauge" | "bar" | "line" | "donut";
}

export default ITile;
