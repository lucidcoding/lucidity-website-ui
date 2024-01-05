export interface IBarChartContainerProps {
    tileId: string;
    width: number;
    height: number;
    onBarClick: (id: string, name: string) => void;
    "data-testid": string;
}

export default IBarChartContainerProps;
