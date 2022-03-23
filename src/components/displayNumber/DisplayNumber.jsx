import React, {useState} from 'react';
import {numberStore} from "../../store";

const DisplayNumber = () => {
    const [number, setNumber] = useState(0);
    numberStore.subscribe(() => {
        setNumber(numberStore.getState().number)
    })
    return (
        <div>
            <h1>Display Number</h1>
            <input type={"number"} value={number} readOnly/>
        </div>
    );
};

export default DisplayNumber;