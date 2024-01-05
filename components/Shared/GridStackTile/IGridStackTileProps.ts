import React, { RefObject } from "react";

export interface IGridStackTileProps {
    gsWidth: number;
    gsHeight: number;
    gsX?: number;
    gsY?: number;
    gsId: string;
    key: string;
    ref?: RefObject<HTMLDivElement>;
    title: string;
    handleClose?: (tileRef: RefObject<HTMLDivElement>) => void;
    children?: React.ReactNode;
    "data-testid"?: string;
}

export default IGridStackTileProps;
