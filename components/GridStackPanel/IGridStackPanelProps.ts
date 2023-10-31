import React from "react";
import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";

export interface IGridStackPanelProps {
    children: Array<React.ReactElement<IGridStackTileProps>> | React.ReactElement<IGridStackTileProps>;
    handleTileClose: (id: string) => void;
    "data-testid"?: string;
}

export default IGridStackPanelProps;
