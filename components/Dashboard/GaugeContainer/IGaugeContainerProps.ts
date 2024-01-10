import Interval from "../../../types/Interval";

export interface IGaugeContainerProps {
    dateRange: {
        startDate: Date | null;
        endDate: Date | null;
        interval: Interval;
    };
    tileId: string;
    width: number;
    height: number;
    "data-testid": string;
}

export default IGaugeContainerProps;
