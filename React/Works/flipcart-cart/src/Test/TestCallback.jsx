// TestCallback.js
import React, { useState } from 'react';

const TestCallback = ({ getColor }) => {
    const [activeColor, setActiveColor] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} value={activeColor} placeholder="Enter color" />
        </div>
    );
};

export default TestCallback;
