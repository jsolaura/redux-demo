import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const ShippingCount = () => {
    const shippingCount = useSelector((state => state.shippingData.count));

    return (
        <div className={"shippingCount"}>
            <span>{shippingCount}</span>
            <FontAwesomeIcon icon={faShoppingCart} size={"1x"} />
        </div>
    );
};

export default ShippingCount;