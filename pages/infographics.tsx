import Head from "next/head";
import React, { useState } from "react";
import InfographicsRoot from "../components/Infographics/InfographicsRoot/InfographicsRoot";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Lucidity | Home</title>
            </Head>
            <NavigationBar />
            <InfographicsRoot />
        </>
    );
};

export default Index;
