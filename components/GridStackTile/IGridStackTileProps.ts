import React, { RefObject } from "react";

export interface IGridStackTileProps {
    gsWidth: number;
    gsHeight: number;
    gsX?: number;
    gsY?: number;
    gsId: string;
    key: string;
    ref?: React.MutableRefObject<any>;
    title: string;
    handleClose: (tileRef: RefObject<HTMLDivElement>) => void;
    children?: React.ReactNode;
}

export default IGridStackTileProps;
