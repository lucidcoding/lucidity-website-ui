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
        {
            title: "Gauge 1",
            height: 2,
            id: `${tileIdPrefix}0`,
            type: "gauge",
            width: 3,
            x: 0,
            y: 0,
        },
        {
            title: "Gauge 2",
            height: 2,
            id: `${tileIdPrefix}1`,
            type: "gauge",
            width: 3,
            x: 0,
            y: 2,
        },
        {
            title: "Bar Chart",
            height: 4,
            id: `${tileIdPrefix}2`,
            type: "bar",
            width: 4,
            x: 3,
            y: 0,
        },
        {
            title: "Line Chart",
            height: 4,
            id: `${tileIdPrefix}3`,
            type: "line",
            width: 5,
        },
        {
            title: "Donut Chart",
            height: 3,
            id: `${tileIdPrefix}4`,
            type: "donut",
            width: 4,
        },
    ];

    const [tileData, setTileData] = useState(initialTileData);
    const [cellWidth, setCellWidth] = useState(0);

    const onAddTile = () => {
        const newTileData = [...tileData];
        const nextIds = newTileData.map((element) => Number(element.id.replace(tileIdPrefix, "")));
        const nextId = Math.max(...nextIds) + 1;

        newTileData.push({
            title: "Donut Chart",
            height: 2,
            id: `${tileIdPrefix}${nextId.toString()}`,
            type: "donut",
            width: 3,
        });

        setTileData(newTileData);
    };

    const onTileClose = (id: string) => {
        const newTileData = [...tileData];
        const currentTile = newTileData.find((element) => element.id === id);

        if (currentTile) {
            const tileIndex = newTileData.indexOf(currentTile);
            newTileData.splice(tileIndex, 1);
            setTileData(newTileData);
        }
    };

    const onTileResize = (id: string, x: number, y: number, width: number, height: number) => {
        console.log(`Resizing ${id}: ${width}`);
        const newTileData = [...tileData];
        const currentTile = newTileData.find((element) => element.id === id);

        if (currentTile) {
            currentTile.width = width;
            currentTile.height = height;
            setTileData(newTileData);
        }
    };

    const onCellWidthUpdated = (width: number) => {
        setCellWidth(width);
    };

    const onBarClick = (id: string, name: string) => {
        console.log("Bar clicked...")
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
                            name: "Band 1",
                            value: 100,
                        },
                        {
                            id: "1002",
                            name: "Band 2",
                            value: 200,
                        }, {
                            id: "1003",
                            name: "Band 3",
                            value: 400,
                        },
                    ]}
                    loaded={true}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
                    xAxisTitle=""
                    xAxisOrientation="horizontal"
                    xAxisTickFormat={(value: any) => value}
                    yAxisTitle=""
                    onBarClick={onBarClick}
                    data-testid="bar-chart"
                />;
                break;
            case "line":
                widget = <LineChart
                    dateRange={{
                        chartEndDate: new Date(2020, 1, 1, 9, 4, 0),
                        chartStartDate: new Date(2020, 1, 1, 9, 0, 0),
                        numberOfXTicks: 5,
                        xTicksFormat: (value: any) => {
                            const date = value as Date;
                            const time = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
                            return time;
                        },
                    }}
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
                                color: "rgb(0, 210, 91)",
                                dateRanges: [{
                                    endDate: new Date(2020, 1, 1, 9, 0, 59),
                                    startDate: new Date(2020, 1, 1, 9, 0, 0),
                                    value: 10,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 1, 59),
                                    startDate: new Date(2020, 1, 1, 9, 1, 0),
                                    value: 5,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 2, 59),
                                    startDate: new Date(2020, 1, 1, 9, 2, 0),
                                    value: 15,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 3, 59),
                                    startDate: new Date(2020, 1, 1, 9, 3, 0),
                                    value: 13,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 4, 59),
                                    startDate: new Date(2020, 1, 1, 9, 4, 0),
                                    value: 10,
                                }],
                                id: "2001",
                                name: "Series 1",
                            },
                            {
                                color: "rgb(255, 171, 0)",
                                dateRanges: [{
                                    endDate: new Date(2020, 1, 1, 9, 0, 59),
                                    startDate: new Date(2020, 1, 1, 9, 0, 0),
                                    value: 3,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 1, 59),
                                    startDate: new Date(2020, 1, 1, 9, 1, 0),
                                    value: 7,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 2, 59),
                                    startDate: new Date(2020, 1, 1, 9, 2, 0),
                                    value: 2,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 3, 59),
                                    startDate: new Date(2020, 1, 1, 9, 3, 0),
                                    value: 2,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 4, 59),
                                    startDate: new Date(2020, 1, 1, 9, 4, 0),
                                    value: 5,
                                }],
                                id: "2002",
                                name: "Series 2",
                            },
                            {
                                color: "rgb(143, 95, 232)",
                                dateRanges: [{
                                    endDate: new Date(2020, 1, 1, 9, 0, 59),
                                    startDate: new Date(2020, 1, 1, 9, 0, 0),
                                    value: 1,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 1, 59),
                                    startDate: new Date(2020, 1, 1, 9, 1, 0),
                                    value: 1,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 2, 59),
                                    startDate: new Date(2020, 1, 1, 9, 2, 0),
                                    value: 2,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 3, 59),
                                    startDate: new Date(2020, 1, 1, 9, 3, 0),
                                    value: 9,
                                }, {
                                    endDate: new Date(2020, 1, 1, 9, 4, 59),
                                    startDate: new Date(2020, 1, 1, 9, 4, 0),
                                    value: 17,
                                }],
                                id: "2003",
                                name: "Series 3",
                            },
                        ]}
                    loaded={true}
                    data-testid="line-chart"
                />;
                break;
            default:
                widget = <></>;
        }

        return (<GridStackTile
            title={tile.title}
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
            <DashboardMenu handleAddTile={onAddTile} />
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Analytics Dashboard</h1>
                </div>
                <GridStackPanel
                    onTileClose={onTileClose}
                    data-testid="grid-stack-panel"
                    onTileResize={onTileResize}
                    onCellWidthUpdate={onCellWidthUpdated}>
                    {tiles}
                </GridStackPanel>
            </div>
        </div >
    );
};

export default DashboardContainer;
