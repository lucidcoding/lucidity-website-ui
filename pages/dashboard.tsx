import Head from "next/head";
import React from "react";
import DashboardContainer from "../components/DashboardContainer/DashboardContainer";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Dashboard: React.FC = () => {
    return (
        <>
            <Head>
                <title>Lucidity | Dashboard</title>
            </Head>
            <NavigationBar />
            <DashboardContainer />
        </>
    );
};

export default Dashboard;
