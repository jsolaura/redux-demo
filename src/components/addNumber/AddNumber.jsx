import React, {useState} from 'react';
import {numberStore} from "../../store";

const AddNumber = () => {
    const [size, setSize] = useState(1);
    const onChange = (event) => {
        const {target : {value}} = event;
        setSize(Number(value));
    }
    console.log(size);
    return (
        <div>
            <h1>Add Number</h1>
            <input type={"button"} value={"+"} onClick={() => {
                numberStore.dispatch({type: 'INCREMENT', size});
            }} />
            <input type={"button"} value={"-"} onClick={() => {
                numberStore.dispatch({type: 'DECREMENT', size});
            }} />
            <input type={"text"} value={size} onChange={onChange}/>
        </div>
    );
};

export default AddNumber;