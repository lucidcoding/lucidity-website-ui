import Head from "next/head";
import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Lucidity | Home</title>
            </Head>
            <NavigationBar />
            <div>
            </div>
        </>
    );
};

export default Index;
