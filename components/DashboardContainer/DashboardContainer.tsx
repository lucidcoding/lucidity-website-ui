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
            content: "Some Data Metric",
            height: 3,
            id: `${tileIdPrefix}0`,
            width: 4,
            x: 0,
            y: 0,
        },
        {
            children: <div>Test Tile 1</div>,
            content: "Another Data Metric",
            height: 3,
            id: `${tileIdPrefix}1`,
            width: 4,
        },
        {
            content: "Third Data Metric",
            height: 3,
            id: `${tileIdPrefix}2`,
            width: 4,
        },
        {
            content: "Fourth Data Metric",
            height: 3,
            id: `${tileIdPrefix}3`,
            width: 4,
        },
        {
            content: "Fifth  Data Metric",
            height: 3,
            id: `${tileIdPrefix}4`,
            width: 4,
        },
    ];

    const [tileData, setTileData] = useState(initialTileData);

    const handleAddTile = () => {
        const newTileData = [...tileData];
        const nextIds = newTileData.map((element) => Number(element.id.replace(tileIdPrefix, "")));
        const nextId = Math.max(...nextIds) + 1;

        newTileData.push({
            content: `tile ${nextId}`,
            height: 1,
            id: `${tileIdPrefix}${nextId.toString()}`,
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
            setTileData(newTileData);
        }
    };

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
                    handleTileResize={handleTileResize}>
                    {tileData.map((tile, index) =>
                        <GridStackTile
                            title={tile.content}
                            gsWidth={tile.width}
                            gsHeight={tile.height}
                            gsX={tile.x}
                            gsY={tile.y}
                            key={tile.id}
                            gsId={tile.id}>
                            <Gauge
                                maxValue={100}
                                value={75}
                                width={100 * tile.width} />
                        </GridStackTile>)
                    }
                </GridStackPanel>
            </div>
        </div >
    );
};

export default DashboardContainer;
