import React from 'react';
import styles from "../Sign.module.css";
import {Link} from "react-router-dom";

const TermForm = () => {
    return (
        <div className={`${styles.formInput} ${styles.termsContainer}`}>
            <label className={styles.checkAll}>
                <input type={"checkBox"}/>
                <p className={styles.termsCheckBtn}> </p>
                전체약관 동의 <span> (선택항목 포함)</span>
            </label>
            <ul className={styles.termsSubContainer}>
                <li>
                    <label className={styles.subLabel}>
                        <div className={styles.termSubInput}>
                            <input type={"checkBox"}/>
                            <p className={styles.termsCheckBtn}></p>
                            이용약관 (필수)
                        </div>
                        <Link to={""} className={styles.termLink}> </Link>
                    </label>
                </li>
                <li>
                    <label className={styles.subLabel}>
                        <div className={styles.termSubInput}>
                            <input type={"checkBox"}/>
                            <p className={styles.termsCheckBtn}></p>
                            개인정보 수집 및 이용 (필수)
                        </div>
                        <Link to={""} className={styles.termLink}> </Link>
                    </label>
                </li>
                <li>
                    <label className={styles.subLabel}>
                        <div className={styles.termSubInput}>
                            <input type={"checkBox"}/>
                            <p className={styles.termsCheckBtn}></p>
                            위치정보 이용약관 (필수)
                        </div>
                        <Link to={""} className={styles.termLink}> </Link>
                    </label>
                </li>
                <li>
                    <label className={styles.subLabel}>
                        <div className={styles.termSubInput}>
                            <input type={"checkBox"}/>
                            <p className={styles.termsCheckBtn}></p>
                            커뮤니티 이용 약관 (필수)
                        </div>
                        <Link to={""} className={styles.termLink}> </Link>
                    </label>
                </li>
                <li>
                    <label className={styles.subLabel}>
                        <div className={styles.termSubInput}>
                            <input type={"checkBox"}/>
                            <p className={styles.termsCheckBtn}></p>
                            마케팅 정보 및 할인 혜택 안내 (선택)
                        </div>
                        <Link to={""} className={styles.termLink}> </Link>
                    </label>
                </li>
            </ul>
            <span className={styles.caption}>* 선택 항목에 동의하지 않으셔도 일부 기능을 제외하고 서비스를 이용하실 수 있습니다.</span>
            <button type={"submit"} className={styles.formSubmit}>가입하기</button>
        </div>
    );
};

export default TermForm;