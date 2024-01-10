import Head from "next/head";
import HomeRoot from "../components/Home/HomeRoot/HomeRoot";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Lucidity | Home</title>
            </Head>
            <NavigationBar />
            <HomeRoot />
        </>
    );
};

export default Index;
