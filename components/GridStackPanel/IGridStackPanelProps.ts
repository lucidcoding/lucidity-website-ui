import React, { RefObject } from "react";
import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";

export interface IGridStackPanelProps {
    children: Array<React.ReactElement<IGridStackTileProps>>;
    handleTileClose: (tileRef: RefObject<HTMLDivElement>, key: string) => void;
}

export default IGridStackPanelProps;
