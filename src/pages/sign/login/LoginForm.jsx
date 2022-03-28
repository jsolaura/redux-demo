import React, {useState} from 'react';
import styles from "../Sign.module.css";
import Button from "../../../components/UI/button/Button";
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    // const [inputs, setInputs] = useState({
    //     email: '',
    //     password: '',
    // });
    // const { email, password } = inputs;
    const [emailEntered, setEmailEntered] = useState('');
    const [passwordEntered, setPasswordEntered] = useState('');
    const [emailValid, setEmailValid] = useState();
    const [passwordValid, setPasswordValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setInputs({
    //         ...inputs,
    //         [name]: value,
    //     })
    //     setEmailValid(email.includes('@'));
    //     setPasswordValid(password.trim().length > 8);
    //     setFormIsValid(email.includes('@') && password.trim().length > 6);
    // }

    const onChangeEmail = (e) => {
        setEmailEntered(e.target.value);
        setFormIsValid(e.target.value.includes('@') && passwordEntered.trim() > 7)
    }

    const onChangePassword = (e) => {
        setPasswordEntered(e.target.value);
        setFormIsValid(e.target.value.trim().length > 7 && emailEntered.includes('@'))
    }

    const onEmailValidate = () => {
        setEmailValid(emailEntered.includes('@'));
    }

    const onPasswordValidate = () => {
        setPasswordValid(passwordEntered.trim().length > 7);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <div className={`${styles.loginControl} ${emailValid === false ? styles.invalid : ''}`}>
                <label htmlFor={"email"}>이메일</label>
                <input
                    name={"email"}
                    id={"email"}
                    value={emailEntered}
                    type={"email"}
                    onChange={onChangeEmail}
                    onBlur={onEmailValidate}
                />
                {emailValid === false ? '' : ''}
                {/*{emailValid === false ? <span>이메일을 입력해주세요 !</span> : ''}*/}
            </div>
            <div className={`${styles.loginControl} ${passwordValid === false ? styles.invalid : ''}`}>
                <label htmlFor={"password"}>비밀번호</label>
                <input
                    name={"password"}
                    id={"password"}
                    value={passwordEntered}
                    type={"password"}
                    onChange={onChangePassword}
                    onBlur={onPasswordValidate}
                />
                {passwordValid === false && <span></span>}
                {/*{passwordValid === false && <span>비밀번호는 대소문자 특수문자 숫자 포함 8글자 이상입니다</span>}*/}
            </div>
            <Button type="submit" name={"로그인"} className={styles.loginBtn} disabled={!formIsValid} />
        </form>
        <span>
            <NavLink to={"/register"}>회원가입</NavLink>
        </span>
    </>

    );
};

export default LoginForm;