import Interval from "../../../types/Interval";

export interface IDashboardMenuProps {
    onAddTile: () => void;
    onPeriodClick: (newStartDate: Date | null, newEndDate: Date | null, newInterval: Interval) => void;
}

export default IDashboardMenuProps;
