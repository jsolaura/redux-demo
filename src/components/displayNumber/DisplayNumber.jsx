import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const DisplayNumber = () => {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const count = useSelector((state => state.counterData.number));
    const onChange = (e) => {
        setValue(Number(e.target.value));
    }

    return (
        <div className={"box"}>
            <h1>Number change <br/>How many I want</h1>
            <h5>{count}</h5>
            <input type={"number"} value={value} onChange={onChange}/>
            <input type={"button"} value={"+value"} onClick={() =>{
                dispatch({type: "COUNTERPUSH", value})
            }}/>
        </div>
    );
};

export default DisplayNumber;