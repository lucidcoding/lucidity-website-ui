import React, { useState } from 'react';

const Index = () => {
    const [value, setValue] = useState<number>(1);

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
        </>
    );
};

export default Index;
