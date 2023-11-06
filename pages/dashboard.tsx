import React from "react";
import DashboardContainer from "../components/DashboardContainer/DashboardContainer";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Dashboard: React.FC = () => {
    return (
        <>
            <NavigationBar />
            <DashboardContainer />
        </>
    );
};

export default Dashboard;
