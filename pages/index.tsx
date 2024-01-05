import Head from "next/head";
import React, { useState } from "react";
import HomeRoot from "../components/HomeRoot/HomeRoot";
import NavigationBar from "../components/NavigationBar/NavigationBar";

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
