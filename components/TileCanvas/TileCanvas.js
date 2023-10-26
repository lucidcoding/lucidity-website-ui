import React, { useState, useEffect } from 'react'; 

const TileCanvas = ({ children }) => {
    const [dragTile, setDragTile] = useState(null);
    const [tiles, setTiles] = useState(children)

    useEffect(() => {
        setTiles(children);
    }, [children])

    const handleTileDragStart = (e, tile, index) => {
        //e.preventDefault();
        //e.stopPropagation();
        e.dataTransfer.effectAllowed = 'move';
        //console.log('DragStart ' + index);
        setDragTile(index);
    };

    const handleTileDragEnter = (e, tile, index) => {
        e.preventDefault();
        e.stopPropagation();

        console.log('DragEnter ' + dragTile + '->' + index);

        const oldIndex = dragTile;
        const newIndex = index;
        const newTiles = [...tiles];

        const element = newTiles.splice(oldIndex, 1)[0];
        console.log(element); // ['css']
        newTiles.splice(newIndex, 0, element);
        setTiles(newTiles);
    }

    const clonedTiles = tiles.map((tile, index) =>
        React.cloneElement(tile, {
            index,
            handleDragEnter: (e) => handleTileDragEnter(e, tile, index),
            handleDragStart: (e) => handleTileDragStart(e, tile, index)
        }),
    );

    return (
        <div className={styles.container}>
            <ul>
                {clonedTiles.map((component, index) =>
                    <li className={styles.item} key={index}>
                        {component}
                    </li>
                )}
            </ul>
        </div>
    )
};

export default TileCanvas;