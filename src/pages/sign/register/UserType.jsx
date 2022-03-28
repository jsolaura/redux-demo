import React, {useState} from 'react';
import styles from "../Sign.module.css";
import check from "../../../asset/image/check.png";

const UserType = () => {
    const [userType, setUserType] = useState("GeneralUser");
    const [isActive, setIsActive] = useState(false);

    const onChangeUserType = (e) => {
        setUserType(e.target.value);
        setIsActive(!isActive);
    }

    return (
        <div className={styles.userType}>
            <label className={`${userType === "GeneralUser" ? `${styles.active}` : ''}`}>
                {userType === 'GeneralUser' && <img src={check} alt={"checkImage"} />}
                개인회원
                <input onChange={onChangeUserType} type={"radio"} name={"userType"} value={"GeneralUser"}/>
            </label>
            <label className={`${userType === "businessUser" ? `${styles.active}` : ''}`}>
                {userType === 'businessUser' && <img src={check} alt={"checkImage"} />}
                기업회원
                <input onChange={onChangeUserType} type={"radio"} name={"userType"} value={"businessUser"}/>
            </label>
        </div>
    );
};

export default UserType;