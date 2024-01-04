import Head from "next/head";
import React, { useState } from "react";
import HomeContainer from "../components/HomeContainer/HomeContainer";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Lucidity | Home</title>
            </Head>
            <NavigationBar />
            <HomeContainer />
        </>
    );
};

export default Index;
