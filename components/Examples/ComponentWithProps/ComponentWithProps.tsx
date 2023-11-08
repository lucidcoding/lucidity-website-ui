import React, { useEffect, useState } from "react";
import styles from './ComponentWithProps.module.scss'
import IComponentWithPropsProps from "./IComponentWithPropsProps";

const ComponentWithProps = (props: IComponentWithPropsProps): JSX.Element => {
    const now = Date.now();

    useEffect(() => {
        console.log("ComponentWithProps.useEffect - every time")
    });

    return (
        <div className={styles.container}>
            <h1>ComponentWithProps</h1>
            <div>
                exampleValue1 from parent: {props.exampleValue}
            </div>
            <div suppressHydrationWarning>
                Time: {now}
            </div>
        </div>
    )
}

export default ComponentWithProps;
