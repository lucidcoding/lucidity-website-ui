import styles from './Tile.module.scss';

const Tile = ({ index, handleDragStart, handleDragEnter, children }) => {
    return (
        <div className={styles.container} draggable="true" onDragStart={handleDragStart} onDragEnter={handleDragEnter}>
            {children}
        </div>
    )
}

export default Tile;