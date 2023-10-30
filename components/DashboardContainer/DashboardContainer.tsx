import { useState } from "react";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import GridStackPanel from "../GridStackPanel/GridStackPanel";
import GridStackTile from "../GridStackTile/GridStackTile";
import styles from "./DashboardContainer.module.scss";

const DashboardContainer = (): JSX.Element => {
    const initialTileData: any[] = [
        {
            children: <div>Test Tile 0</div>,
            content: "Some Data Metric",
            height: 3,
            id: "0",
            width: 4,
            x: 0,
            y: 0,
        },
        {
            children: <div>Test Tile 1</div>,
            content: "Another Data Metric",
            height: 3,
            id: "1",
            width: 4,
        },
        {
            content: "Third Data Metric",
            height: 3,
            id: "2",
            width: 4,
        },
        {
            content: "Fourth Data Metric",
            height: 3,
            id: "3",
            width: 4,
        },
        {
            content: "Fifth  Data Metric",
            height: 3,
            id: "4",
            width: 4,
        },
    ];

    const [tileData, setTileData] = useState(initialTileData);

    const handleAddTile = () => {
        const newTileData = [...tileData];
        const nextIds = newTileData.map((element) => Number(element.id));
        const nextId = Math.max(...nextIds) + 1;

        newTileData.push({
            content: `tile ${nextId}`,
            height: 1,
            id: nextId.toString(),
            width: 1,
        });

        setTileData(newTileData);
    };

    const handleTileClose = (id: string) => {
        const newTileData = [...tileData];
        const currentTile = newTileData.find((element) => element.id === id);
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
                            key={tileDatum.id}
                            gsId={tileDatum.id}
                            handleClose={() => handleTileClose(tileDatum.id)}>
                            {tileDatum.children}
                        </GridStackTile>)
                    }
                </GridStackPanel>
            </div>
        </div >
    );
};

export default DashboardContainer;
