import Head from "next/head";
import DashboardRoot from "../components/Dashboard/DashboardRoot/DashboardRoot";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";

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
