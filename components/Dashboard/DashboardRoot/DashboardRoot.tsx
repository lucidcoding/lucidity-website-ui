import { useState } from "react";
import Interval from "../../../types/Interval";
import GridStackPanel from "../../Shared/GridStackPanel/GridStackPanel";
import GridStackTile from "../../Shared/GridStackTile/GridStackTile";
import BarChartContainer from "../BarChartContainer/BarChartContainer";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DonutChartContainer from "../DonutChartContainer/DonutChartContainer";
import GaugeContainer from "../GaugeContainer/GaugeContainer";
import LineChartContainer from "../LineChartContainer/LineChartContainer";
import styles from "./DashboardRoot.module.scss";
import ITile from "./ITile";

const DashboardRoot = (): JSX.Element => {
    const tileIdPrefix = "tl";

    const initialTileData: ITile[] = [
        {
            height: 2,
            id: `${tileIdPrefix}0`,
            title: "Total Views & Target",
            type: "gauge",
            width: 3,
            x: 0,
            y: 0,
        },
        {
            height: 3,
            id: `${tileIdPrefix}1`,
            title: "Proportion by Age Group",
            type: "donut",
            width: 3,
            x: 0,
            y: 2,
        },
        {
            height: 5,
            id: `${tileIdPrefix}2`,
            title: "Total by Age Group",
            type: "bar",
            width: 4,
            x: 3,
            y: 0,
        },
        {
            height: 5,
            id: `${tileIdPrefix}3`,
            title: "Total by Age Group & Date",
            type: "line",
            width: 5,
        },
    ];

    const [tileData, setTileData] = useState(initialTileData);
    const [cellWidth, setCellWidth] = useState(0);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [interval, setInterval] = useState<Interval>(Interval.year);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const onAddTile = () => {
        const newTileData = [...tileData];
        const nextIds = newTileData.map((element) => Number(element.id.replace(tileIdPrefix, "")));
        const nextId = Math.max(...nextIds) + 1;

        newTileData.push({
            height: 2,
            id: `${tileIdPrefix}${nextId.toString()}`,
            title: "Donut Chart",
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
        console.log("Bar clicked...");
    };

    const onPeriodClick = (newStartDate: Date | null, newEndDate: Date | null, newInterval: Interval) => {
        setStartDate(newStartDate);
        setEndDate(newEndDate);
        setInterval(newInterval);
    };

    const tiles = tileData.map((tile, index) => {
        let widget: JSX.Element;

        switch (tile.type) {
            case "donut":
                widget = <DonutChartContainer
                    dateRange={{
                        endDate,
                        startDate,
                    }}
                    tileId={tile.id}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
                    data-testid="donut-chart"
                />;
                break;
            case "gauge":
                widget = <GaugeContainer
                    dateRange={{
                        endDate,
                        interval,
                        startDate,
                    }}
                    tileId={tile.id}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
                    data-testid="gauge"
                />;
                break;
            case "bar":
                widget = <BarChartContainer
                    dateRange={{
                        endDate,
                        startDate,
                    }}
                    tileId={tile.id}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
                    onBarClick={onBarClick}
                    data-testid="bar-chart"
                />;
                break;
            case "line":
                widget = <LineChartContainer
                    dateRange={{
                        endDate,
                        interval,
                        startDate,
                    }}
                    tileId={tile.id}
                    width={cellWidth * tile.width}
                    height={cellWidth * tile.height}
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
            <DashboardMenu onAddTile={onAddTile} onPeriodClick={onPeriodClick} />
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Analytics Dashboard: Website Page Views</h1>
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

export default DashboardRoot;
