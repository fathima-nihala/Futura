// Test.js
import React, { useState } from 'react';
import TestCallback from './TestCallback';
import '../Components/Signup/Signup.css';

const Test = () => {


    const [uiColor, setUiColor] = useState('');

    const getColor = (color) => {
        setUiColor(color);
    };

    return (
        <div>
            <div className='container' style={{ backgroundColor: uiColor }}></div>
            <TestCallback getColor={getColor} />
        </div>
    );
};

export default Test;
