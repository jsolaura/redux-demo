import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterActions, increment, reset} from "../../../reducers/counting";

const DisplayNumber = () => {
    const [value, setValue] = useState(0);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const count = useSelector((state => state.counterData.number));
    const showCounter = useSelector((state => state.counterData.showCounter));
    const onChange = (e) => {
        setValue(Number(e.target.value));
    }

    return (
        <div className={"box"}>
            <h1>Number change <br/>How many I want</h1>
            {showCounter && <h5>{count}</h5>}
            <input type={"number"} ref={inputRef} min={0} value={value} onChange={onChange}/>
            <input type={"button"} value={"+value"} onClick={() =>{
                dispatch(counterActions.push(value));
            }}/>
            <button type={"button"} onClick={() => {
                setValue(0);
                inputRef.current.focus();
                dispatch(counterActions.reset())
            }}>Reset</button>
        </div>
    );
};

export default DisplayNumber;