import { element } from "prop-types";
import { useState } from "react";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Gauge from "../Gauge/Gauge";
import GridStackPanel from "../GridStackPanel/GridStackPanel";
import GridStackTile from "../GridStackTile/GridStackTile";
import styles from "./DashboardContainer.module.scss";
import ITile from "./ITile";

const DashboardContainer = (): JSX.Element => {
    const tileIdPrefix = "tl";
    const initialTileData: ITile[] = [
        {
            children: <div>Test Tile 0</div>,
            content: "Gauge Metric",
            height: 2,
            id: `${tileIdPrefix}0`,
            type: "gauge",
            width: 3,
            x: 0,
            y: 0,
        },
        {
            children: <div>Test Tile 1</div>,
            content: "Another Data Metric",
            height: 2,
            id: `${tileIdPrefix}1`,
            type: "gauge",
            width: 3,
            x: 0,
            y: 2,
        },
        {
            content: "Third Data Metric",
            height: 3,
            id: `${tileIdPrefix}2`,
            type: "gauge",
            width: 4,
        },
        {
            content: "Fourth Data Metric",
            height: 3,
            id: `${tileIdPrefix}3`,
            type: "gauge",
            width: 4,
        },
        {
            content: "Fifth  Data Metric",
            height: 3,
            id: `${tileIdPrefix}4`,
            type: "gauge",
            width: 4,
        },
    ];

    const [tileData, setTileData] = useState(initialTileData);
    const [cellWidth, setCellWidth] = useState(0);

    const handleAddTile = () => {
        const newTileData = [...tileData];
        const nextIds = newTileData.map((element) => Number(element.id.replace(tileIdPrefix, "")));
        const nextId = Math.max(...nextIds) + 1;

        newTileData.push({
            content: `tile ${nextId}`,
            height: 1,
            id: `${tileIdPrefix}${nextId.toString()}`,
            type: "gauge",
            width: 1,
        });

        setTileData(newTileData);
    };

    const handleTileClose = (id: string) => {
        const newTileData = [...tileData];
        const currentTile = newTileData.find((element) => element.id === id);

        if (currentTile) {
            const tileIndex = newTileData.indexOf(currentTile);
            newTileData.splice(tileIndex, 1);
            setTileData(newTileData);
        }
    };

    const handleTileResize = (id: string, x: number, y: number, width: number, height: number) => {
        console.log(`Resizing ${id}: ${width}`);
        const newTileData = [...tileData];
        const currentTile = newTileData.find((element) => element.id === id);

        if (currentTile) {
            currentTile.width = width;
            currentTile.height = height;
            setTileData(newTileData);
        }
    };

    const cellWidthUpdated = (width: number) => {
        setCellWidth(width);
    };

    const tiles = tileData.map((tile, index) => {
        let widget: JSX.Element;

        switch (tile.type) {
            case "gauge":
                widget = <Gauge
                    minValue={0}
                    maxValue={100}
                    value={75}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
                    units="£" />;
                break;
            default:
                widget = <></>;
        }

        return (<GridStackTile
            title={tile.content}
            gsWidth={tile.width}
            gsHeight={tile.height}
            gsX={tile.x}
            gsY={tile.y}
            key={tile.id}
            gsId={tile.id}>
            {widget}
        </GridStackTile>);
    });

    return (
        <div className={styles.container}>
            <DashboardMenu handleAddTile={handleAddTile} />
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Analytics Dashboard</h1>
                </div>
                <GridStackPanel
                    handleTileClose={handleTileClose}
                    data-testid="grid-stack-panel"
                    handleTileResize={handleTileResize}
                    handleCellWidthUpdate={cellWidthUpdated}>
                    {tiles}
                </GridStackPanel>
            </div>
        </div >
    );
};

export default DashboardContainer;
