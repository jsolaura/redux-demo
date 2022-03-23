import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {shippingPush} from "../../reducers/shipping";

const Shipping = () => {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const onChange = (e) => {
        setValue(Number(e.target.value));
    }
    return (
        <>
        <div className={"box"}>
            <h1>옵션</h1>
            <div className={"inputContainer"}>
                <span>몇개 구매하시겠어요?</span>
                <select value={value} onChange={onChange}>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                    <option value={"5"}>5</option>
                </select>

                <button type={"button"} onClick={() =>{
                    dispatch({type: "PUSH", value})
                }}>
                    선택하기
                </button>
            </div>
            <div className={"inputContainer"}>
                <button type={"button"} onClick={() => dispatch(shippingPush())}>
                    장바구니에 넣기
                </button>
                <button type={"button"} onClick={() =>{dispatch(shippingPush())}}>
                    장바구니에 넣기
                </button>
            </div>
        </div>
        </>
    );
};

export default Shipping;