import React, {useState} from 'react';
import {numberStore} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, push} from "../../reducers/counting";
import {counterActions} from "../../reducers/counting";

const AddNumber = () => {
    const [control, setControl] = useState(true);
    const dispatch = useDispatch();
    const count = useSelector((state => state.counterData.number));
    const showCounter = useSelector((state => state.counterData.showCounter));

    return (
        <div className={"box"}>
            <h1>Number change 1 by 1</h1>
            {showCounter && <h4>{count}</h4>}
            <button type={"button"} onClick={() => dispatch(counterActions.increment())}>+1</button>
            <button type={"button"} onClick={() => {dispatch(counterActions.decrement());
            }}>-1</button>
            {/*<button onClick={() => dispatch(push())}>PUSH</button>*/}
        </div>
    );
};

export default AddNumber;