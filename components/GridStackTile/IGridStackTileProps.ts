import React from "react";

export interface IGridStackTileProps {
    gsWidth: number;
    gsHeight: number;
    gsX?: number;
    gsY?: number;
    gsId: string;
    ref?: React.MutableRefObject<any>;
    title: string;
    handleClose: (tileRef: any) => void;
    children: any[];
}

export default IGridStackTileProps;
