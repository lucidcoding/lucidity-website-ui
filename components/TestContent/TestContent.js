import React, { useEffect } from "react";

const TestContent = ({tileNumber, testValue}) => {

    useEffect( () => {
        console.log('counter updated');
    }, [testValue])

    return (
        <div>
            <div>Tile {tileNumber} {new Date().toLocaleString()}</div>
            <div>Value: {testValue}</div>
        </div>
    )
}

export default TestContent;
