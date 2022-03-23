import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const DisplayNumber = () => {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const onChange = (e) => {
        setValue(Number(e.target.value));
    }

    return (
        <div>
            <h1>Display Number</h1>
            <input type={"number"} value={value} onChange={onChange}/>
            <input type={"button"} value={"+"} onClick={() =>{
                dispatch({type: "PUSH", value})
            }}/>
        </div>
    );
};

export default DisplayNumber;