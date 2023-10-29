import React from "react";
import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";

export interface IGridStackPanelProps {
    // children: IGridStackTileProps[];
    children: React.JSX.Element[];
    handleTileClose: (tileRef: any, key: string) => void;
}

export default IGridStackPanelProps;
