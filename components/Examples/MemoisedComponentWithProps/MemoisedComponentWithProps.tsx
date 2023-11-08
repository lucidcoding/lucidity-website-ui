import React, { useEffect, useState } from "react";
import styles from './MemoisedComponentWithProps.module.scss'
import IMemoisedComponentWithPropsProps from "./IMemoisedComponentWithPropsProps";

const ComponentWithProps = (props: IMemoisedComponentWithPropsProps): JSX.Element => {
    const now = Date.now();

    useEffect(() => {
        console.log("MemoisedComponentWithProps.useEffect - every time")
    });

    return (
        <div className={styles.container}>
            <h1>MemoisedComponentWithProps</h1>
            <div>
                exampleValue1 from parent: {props.exampleValue}
            </div>
            <div suppressHydrationWarning>
                Time: {now}
            </div>
        </div>
    )
}

export default React.memo(ComponentWithProps);
