import React, { RefObject } from "react";
import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";

export interface IGridStackPanelProps {
    children: Array<React.ReactElement<IGridStackTileProps>> | React.ReactElement<IGridStackTileProps>;
    onTileClose: (id: string) => void;
    onTileResize: (id: string, x: number, y: number, width: number, height: number) => void;
    "data-testid"?: string;
    onCellWidthUpdate: (cellWidth: number) => void;
}

export default IGridStackPanelProps;
