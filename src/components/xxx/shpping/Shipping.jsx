import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {shippingActions, shippingPush} from "../../../reducers/shipping";

const Shipping = () => {
    const selectRef = useRef(null);
    const [selected, setSelected] = useState(1);
    const option = [1, 2, 3, 4, 5];
    const dispatch = useDispatch();
    const onChange = (e) => {
        setSelected(Number(e.target.value));
    }
    console.log(selected)
    return (
        <>
        <div className={"box"}>
            <h1>옵션</h1>
            <div className={"inputContainer"}>
                <span>몇개 구매하시겠어요?</span>
                <select ref={selectRef} value={selected} onChange={onChange}>
                    {option.map(num => (
                        <option value={num} key={num}>{num}</option>
                    ))}
                </select>

                <button type={"button"} onClick={() =>{
                    dispatch(shippingActions.pushByItems(selected));
                }}>
                    선택하기
                </button>
            </div>
            <div className={"inputContainer"}>
                <button type={"button"} onClick={() => dispatch(shippingActions.push())}>
                    장바구니에 넣기
                </button>
                <button type={"button"} onClick={() =>dispatch(shippingActions.push())}>
                    장바구니에 넣기
                </button>
            </div>
        </div>
        </>
    );
};

export default Shipping;