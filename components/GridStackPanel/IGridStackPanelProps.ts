import React, { RefObject } from "react";
import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";

export interface IGridStackPanelProps {
    children: Array<React.ReactElement<IGridStackTileProps>> | React.ReactElement<IGridStackTileProps>;
    handleTileClose: (id: string) => void;
    handleTileResize: (id: string, x: number, y: number, width: number, height: number) => void;
    "data-testid"?: string;
}

export default IGridStackPanelProps;
