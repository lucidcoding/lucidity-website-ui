import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";

export interface IGridStackPanelProps {
    children: Array<React.ReactElement<IGridStackTileProps>>;
    handleTileClose: (tileRef: any, key: string) => void;
}

export default IGridStackPanelProps;
