import Head from "next/head";
import React from "react";
import DashboardRoot from "../components/DashboardRoot/DashboardRoot";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Dashboard: React.FC = () => {
    return (
        <>
            <Head>
                <title>Lucidity | Dashboard</title>
            </Head>
            <NavigationBar />
            <DashboardRoot />
        </>
    );
};

export default Dashboard;
