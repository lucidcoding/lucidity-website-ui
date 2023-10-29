import { useState } from "react";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import GridStackPanel from "../GridStackPanel/GridStackPanel";
import GridStackTile from "../GridStackTile/GridStackTile";
import styles from "./DashboardContainer.module.scss";

const DashboardContainer = (): JSX.Element => {
    const initialTileData = [
        {
            children: <div>Test Tile 0</div>,
            content: "Some Data Metric",
            height: 3,
            key: "0",
            width: 4,
            // x: 0,
            // y: 0,
        },
        {
            children: <div>Test Tile 1</div>,
            content: "Another Data Metric",
            height: 3,
            key: "1",
            width: 4,
        },
        {
            content: "Third Data Metric",
            height: 3,
            key: "2",
            width: 4,
        },
        {
            content: "Fourth Data Metric",
            height: 3,
            key: "3",
            width: 4,
        },
        {
            content: "Fifth  Data Metric",
            height: 3,
            key: "4",
            width: 4,
        },
    ];

    const [tileData, setTileData] = useState(initialTileData);

    const handleAddTile = () => {
        const newTileData = [...tileData];
        const existingKeys = newTileData.map((element) => Number(element.key));
        const nextKey = Math.max(...existingKeys) + 1;

        newTileData.push({
            content: `tile ${nextKey}`,
            height: 1,
            key: nextKey.toString(),
            width: 1,
        });

        setTileData(newTileData);
    };

    const handleTileClose = (ref: any, key: string) => {
        const newTileData = [...tileData];
        const currentTile: any = newTileData.find((element) => element.key === key);
        const tileIndex = newTileData.indexOf(currentTile);
        newTileData.splice(tileIndex, 1);
        setTileData(newTileData);
    };

    console.log(tileData);

    return (
        <div className={styles.container}>
            <DashboardMenu handleAddTile={handleAddTile} />
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Analytics Dashboard</h1>
                </div>
                <GridStackPanel handleTileClose={handleTileClose}>
                    {tileData.map((tileDatum, index) =>
                        <GridStackTile
                            title={tileDatum.content}
                            gsWidth={tileDatum.width}
                            gsHeight={tileDatum.height}
                            /*gsX={tileDatum.x}
                            gsY={tileDatum.y}*/
                            key={tileDatum.key.toString()}
                            gsId={`${tileDatum.key}`}
                            handleClose={(ref: any) => handleTileClose(ref, tileDatum.key)}>
                            {tileDatum.children}
                        </GridStackTile>)
                    }
                </GridStackPanel>
            </div>
        </div >
    );
};

export default DashboardContainer;
