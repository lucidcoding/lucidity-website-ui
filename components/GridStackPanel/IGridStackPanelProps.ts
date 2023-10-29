import React from "react";
import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";

export interface IGridStackPanelProps {
    children: Array<React.FC<IGridStackTileProps>>;
}

export default IGridStackPanelProps;
