export interface IDashboardMenuProps {
    onAddTile: () => void;
    onPeriodClick: (newStartDate: Date | null, newEndDate: Date | null) => void;
}

export default IDashboardMenuProps;
