import React from "react";

export type GridStackTileProps = {
    gsWidth: number;
    gsHeight: number;
    gsX: number;
    gsY: number;
    gsId: string;
    ref: React.MutableRefObject<any>;
    title: string;
    handleClose: Function;
    children: Array<any>;
}

export default GridStackTileProps;
