import React, {useState} from 'react';
import {numberStore} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, push} from "../../reducers/counting";

const AddNumber = () => {
    const dispatch = useDispatch();
    const count = useSelector((state => state.counterData.number));

    return (
        <div className={"box"}>
            <h1>Number change 1 by 1</h1>
            <h4>{count}</h4>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            {/*<button onClick={() => dispatch(push())}>PUSH</button>*/}
        </div>
    );
};

export default AddNumber;