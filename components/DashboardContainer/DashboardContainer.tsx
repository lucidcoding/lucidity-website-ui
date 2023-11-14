import { useState } from "react";
import BarChart from "../BarChart/BarChart";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Gauge from "../Gauge/Gauge";
import GridStackPanel from "../GridStackPanel/GridStackPanel";
import GridStackTile from "../GridStackTile/GridStackTile";
import LineChart from "../LineChart/LineChart";
import styles from "./DashboardContainer.module.scss";
import ITile from "./ITile";

const DashboardContainer = (): JSX.Element => {
    const tileIdPrefix = "tl";

    const initialTileData: ITile[] = [
        /*{
            content: "Gauge Metric 1",
            height: 2,
            id: `${tileIdPrefix}0`,
            type: "gauge",
            width: 3,
            x: 0,
            y: 0,
        },
        {
            content: "Gauge Metric 2",
            height: 2,
            id: `${tileIdPrefix}1`,
            type: "gauge",
            width: 3,
            x: 0,
            y: 2,
        },*/
        {
            content: "Bar Chart Meteric 1",
            height: 4,
            id: `${tileIdPrefix}2`,
            type: "bar",
            width: 4,
            x: 3,
            y: 0,
        },
        /*{
            content: "Fourth Data Metric",
            height: 4,
            id: `${tileIdPrefix}3`,
            type: "line",
            width: 5,
        },
        {
            content: "Fifth  Data Metric",
            height: 3,
            id: `${tileIdPrefix}4`,
            type: "donut",
            width: 4,
        },*/
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
                    key={tile.id}
                    minValue={0}
                    maxValue={100}
                    value={75}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
                    units="£" />;
                break;
            case "bar":
                widget = <BarChart
                    key={tile.id}
                    data={[
                        {
                            id: "1001",
                            name: "Queue 1",
                            value: 100
                        },
                        {
                            id: "1002",
                            name: "Queue 2",
                            value: 200,
                        }, {
                            id: "1003",
                            name: "Queue 3",
                            value: 400,
                        }
                    ]}
                    loaded={true}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
                    xAxisTitle=""
                    xAxisOrientation="horizontal"
                    xAxisTickFormat={(value: any) => value}
                    yAxisTitle=""
                    onBarClick={() => { }}
                />;
                break;
            case "line":
                widget = <LineChart
                    dateRange={{
                        chartStartDate: new Date(2020, 1, 1, 9, 0, 0),
                        chartEndDate: new Date(2020, 1, 1, 9, 4, 0),
                        numberOfXTicks: 5,
                        xTicksFormat: (value: any) => {
                            const date = value as Date;
                            const time = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
                            return time;
                        }
                    }}
                    onPointClick={() => { }}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
                    xAxisTitle=""
                    yAxisTitle=""
                    xAxisOrientation="horizontal"
                    legendWidth={100}
                    legendLineHeight={20}
                    data={
                        [
                            {
                                dateRanges: [{
                                    startDate: new Date(2020, 1, 1, 9, 0, 0),
                                    endDate: new Date(2020, 1, 1, 9, 0, 59),
                                    value: 10
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 1, 0),
                                    endDate: new Date(2020, 1, 1, 9, 1, 59),
                                    value: 5
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 2, 0),
                                    endDate: new Date(2020, 1, 1, 9, 2, 59),
                                    value: 15
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 3, 0),
                                    endDate: new Date(2020, 1, 1, 9, 3, 59),
                                    value: 13
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 4, 0),
                                    endDate: new Date(2020, 1, 1, 9, 4, 59),
                                    value: 10
                                }],
                                id: "series 1",
                                name: "series 1n",
                                color: "rgb(0, 210, 91)",
                            },
                            {
                                dateRanges: [{
                                    startDate: new Date(2020, 1, 1, 9, 0, 0),
                                    endDate: new Date(2020, 1, 1, 9, 0, 59),
                                    value: 3
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 1, 0),
                                    endDate: new Date(2020, 1, 1, 9, 1, 59),
                                    value: 7
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 2, 0),
                                    endDate: new Date(2020, 1, 1, 9, 2, 59),
                                    value: 2
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 3, 0),
                                    endDate: new Date(2020, 1, 1, 9, 3, 59),
                                    value: 2
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 4, 0),
                                    endDate: new Date(2020, 1, 1, 9, 4, 59),
                                    value: 5
                                }],
                                id: "series 2",
                                name: "series 2n",
                                color: "rgb(255, 171, 0)",
                            },
                            {
                                dateRanges: [{
                                    startDate: new Date(2020, 1, 1, 9, 0, 0),
                                    endDate: new Date(2020, 1, 1, 9, 0, 59),
                                    value: 1
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 1, 0),
                                    endDate: new Date(2020, 1, 1, 9, 1, 59),
                                    value: 1
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 2, 0),
                                    endDate: new Date(2020, 1, 1, 9, 2, 59),
                                    value: 2
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 3, 0),
                                    endDate: new Date(2020, 1, 1, 9, 3, 59),
                                    value: 9
                                }, {
                                    startDate: new Date(2020, 1, 1, 9, 4, 0),
                                    endDate: new Date(2020, 1, 1, 9, 4, 59),
                                    value: 17
                                }],
                                id: "series 3",
                                name: "series 3n",
                                color: "rgb(143, 95, 232)",
                            }
                        ]}
                    loaded={true}

                />
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
