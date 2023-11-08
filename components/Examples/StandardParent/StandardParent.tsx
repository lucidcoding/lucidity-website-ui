import React, { useEffect, useRef, useState } from "react";
import styles from './StandardParent.module.scss'
import DumbComponent from "../DumbComponent/DumbComponent";
import MemoizedComponent from "../MemoizedComponent/MemoizedComponent";
import ComponentWithProps from "../ComponentWithProps/ComponentWithProps";
import MemoisedComponentWithProps from "../MemoisedComponentWithProps/MemoisedComponentWithProps";
import RerenderSignal from "../RerenderSignal/RerenderSignal";

const StandardParent = (): JSX.Element => {
    const [exampleValue1, setExampleValue1] = useState(0)
    const [exampleValue2, setExampleValue2] = useState(0);


    //const [now2, setNow2] = useState(0);

    // const previousNow = useRef(now);
    const now = Date.now();

    //let now = 0;

    useEffect(() => {
        //setNow(Date.now());
        console.log("StandardParent.useEffect - first time only")
    }, []);

    // Runs every time page is rendered ?
    useEffect(() => {
        //setNow2(Date.now());
        console.log("StandardParent.useEffect - every time")
    });

    useEffect(() => {
        console.log("StandardParent.useEffect - when exampleValue1 changes")
    }, [exampleValue1]);

    useEffect(() => {
        console.log("StandardParent.useEffect - when exampleValue2 changes")
    }, [exampleValue2]);

    const handleClick1 = () => {
        setExampleValue1(exampleValue1 + 1);
    };

    const handleClick2 = () => {
        setExampleValue2(exampleValue2 + 1);
    };

    return (
        <div className={styles.container} key={`${now}-key1`} >
            <h1>StandardParent</h1>
            <div>exampleValue1: {exampleValue1}
                &nbsp;
                <button onClick={handleClick1}>Increment!</button>
            </div>
            <div>exampleValue2: {exampleValue2}
                &nbsp;
                <button onClick={handleClick2}>Increment!</button>
            </div>
            <div suppressHydrationWarning>
                Time: {now}
            </div>
            <div className={styles.elements}>
                <DumbComponent></DumbComponent>
                <MemoizedComponent></MemoizedComponent>
                <ComponentWithProps exampleValue={exampleValue1}></ComponentWithProps>
                <MemoisedComponentWithProps exampleValue={exampleValue1}></MemoisedComponentWithProps>
            </div>
        </div>
    )
}

export default StandardParent;
