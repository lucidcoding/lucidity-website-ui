import Head from "next/head";
import AboutRoot from "../components/About/AboutRoot/AboutRoot";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Lucidity | Home</title>
            </Head>
            <NavigationBar />
            <AboutRoot />
        </>
    );
};

export default Index;
