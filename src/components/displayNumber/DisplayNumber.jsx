import React from 'react';
import {useSelector} from "react-redux";

const DisplayNumber = () => {
    const value = useSelector((state => state.counterData.number));

    return (
        <div>
            <h1>Display Number</h1>
            <input type={"number"} value={value} readOnly/>
        </div>
    );
};

export default DisplayNumber;