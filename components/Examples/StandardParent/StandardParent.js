import React, { useState } from "react";
import styles from './StandardParent.module.scss'
import DumbComponent from "../DumbComponent/DumbComponent";
import RerenderPreventionComponent from "../RerenderPreventionComponent/RerenderPreventionComponent";

const StandardParent = (props) => {
    const [exampleValue, setExampleValue] = useState(0)

    const handleClick = () => {
        setExampleValue(exampleValue + 1);
    };

    const now = Date.now();

    return (
        <div className={styles.container}>
            <h1>StandardParent</h1>
            <div>exampleValue: {exampleValue}
                &nbsp;
                <button onClick={handleClick}>Increment!</button>
            </div>
            <div>
                Time: {now}
            </div>
            <DumbComponent></DumbComponent>
            <RerenderPreventionComponent></RerenderPreventionComponent>
        </div>
    )
}

export default StandardParent;
