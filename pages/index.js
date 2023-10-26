import React, { useState, useEffect } from 'react';
import Tile from '../components/Tile/Tile.js';
import TileCanvas from '../components/TileCanvas/TileCanvas.js';
import TestContent from '../components/TestContent/TestContent.js';
import GridStackPanel from '../components/GridStackPanel/GridStackPanel.js';
import GridStackTile from '../components/GridStackTile/GridStackTile.js';
import { DiagnosticCategory } from 'typescript';

const Index = () => {
    const [value, setValue] = useState(1);

    const handleClick = () => {
        setValue(value + 1);
    };

    return (
        <>
            <h1>First Post</h1>
            <p>Value: {value}</p>
            <div>
                <button type="button" onClick={handleClick}>Increment!</button>
            </div>
            <GridStackPanel testValue={value}>
            </GridStackPanel>
        </>
    );

    /*return (
        <>
            <h1>First Post</h1>
            <p>Value: {value}</p>
            <div>
                <button type="button" onClick={handleClick}>Increment!</button>
            </div>
            <GridStackPanel testValue={value}>
                <GridStackTile title="Tile 1" gsWidth="1">
                    <TestContent testValue={value}></TestContent>
                </GridStackTile>
                <GridStackTile title="Tile 2" gsWidth="2">
                    Tile 2 {new Date().toLocaleString()}
                </GridStackTile>
                <GridStackTile title="Tile 3" gsWidth="3">
                    Tile 3 {new Date().toLocaleString()}
                </GridStackTile>
                <GridStackTile title="Tile 4" gsWidth="4">
                    Tile 4 {new Date().toLocaleString()}
                </GridStackTile>
            </GridStackPanel>
        </>
    );*/
    /*return (
        <>
            <h1>First Post</h1>
            <TileCanvas>
                <Tile>Tile 1</Tile>
                <Tile>Tile 2</Tile>
                <Tile>Tile 3</Tile>
            </TileCanvas>
        </>
    );*/
}

export default Index;