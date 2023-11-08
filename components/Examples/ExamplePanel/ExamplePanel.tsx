import { useEffect, useState } from "react";
import styles from './ExamplePanel.module.scss'
import StandardParent from "../StandardParent/StandardParent";

const ExamplePanel = (): JSX.Element => {
    // https://medium.com/@akashshukla_1715/preventing-unnecessary-rerendering-of-child-components-in-react-using-usecallback-and-react-memo-34f1423fe263#:~:text=To%20address%20this%20issue%2C%20React,components%20within%20a%20parent%20component.
    // https://codesandbox.io/s/elated-resonance-i86qql?file=/src/App.js

    const now = Date.now();

    useEffect(() => {
        console.log("");
    });

    return (
        <div className={styles.container}>
            <h1>ExamplePanel</h1>
            <div suppressHydrationWarning>
                Time: {now}
            </div>
            <div className={styles.elements}>
                <StandardParent></StandardParent>
            </div>
        </div>
    )
}

export default ExamplePanel;
