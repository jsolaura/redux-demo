import React, {useState} from 'react';
import {numberStore} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, push} from "../../reducers/counting";

const AddNumber = () => {
    const dispatch = useDispatch();
    const count = useSelector((state => state.counterData.number));

    return (
        <div>
            <h1>Add Number</h1>
            <h4>{count}</h4>
            <br/>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {/*<button onClick={() => dispatch(push())}>PUSH</button>*/}
        </div>
    );
};

export default AddNumber;