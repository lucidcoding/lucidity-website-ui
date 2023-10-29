import React, { useState } from "react";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import GridStackPanel from "../GridStackPanel/GridStackPanel";
import GridStackTile from "../GridStackTile/GridStackTile";
import styles from "./DashboardContainer.module.scss";

const DashboardContainer = () => {
    const initialTileData = [
        {
            content: "Some Data Metric",
            height: 3,
            key: 0,
            width: 4,
            // x: 0,
            // y: 0,
        },
        {
            content: "Another Data Metric",
            height: 3,
            key: 1,
            width: 4,
        },
        {
            content: "Third Data Metric",
            height: 3,
            key: 2,
            width: 4,
        },
        {
            content: "Fourth Data Metric",
            height: 3,
            key: 3,
            width: 4,
        },
        {
            content: "Fifth  Data Metric",
            height: 3,
            key: 4,
            width: 4,
        },
    ];

    const [tileData, setTileData] = useState(initialTileData);

    const handleAddTile = () => {
        const newTileData = [...tileData];
        const existingKeys = newTileData.map((element) => element.key);
        const nextKey = Math.max(...existingKeys) + 1;

        newTileData.push({
            content: `tile ${nextKey}`,
            height: 1,
            key: nextKey,
            width: 1,
        });

        setTileData(newTileData);
        // lastKeyAdded.current = nextKey;
    };

    const handleTileClose = (ref: any, key: any) => {
        const newTileData = [...tileData];
        const currentTile: any = newTileData.find((element) => element.key === key);
        const tileIndex = newTileData.indexOf(currentTile);
        newTileData.splice(tileIndex, 1);
        setTileData(newTileData);
    };

    console.log(tileData);

    return (
        <div className={styles.container}>
            <DashboardMenu handleAddTile={handleAddTile}>
            </DashboardMenu>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Analytics Dashboard</h1>
                </div>
                <GridStackPanel tileData={tileData} handleTileClose={handleTileClose}>
                    {tileData.map((tileDatum, index) =>
                        <GridStackTile
                            title={tileDatum.content}
                            gsWidth={tileDatum.width}
                            gsHeight={tileDatum.height}
                            /*gsX={tileDatum.x}
                            gsY={tileDatum.y}*/
                            key={tileDatum.key}
                            gsId={`${tileDatum.key}`}
                            handleClose={(ref: any) => handleTileClose(ref, tileDatum.key)}>
                        </GridStackTile>,
                    )}
                </GridStackPanel>
            </div>
        </div >
    );
};

export default DashboardContainer;
