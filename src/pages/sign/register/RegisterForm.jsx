import React, {useState} from 'react';
import styles from "../Sign.module.css";
import check from "../../../asset/image/check.png";
import eyeOff from "../../../asset/image/eye-off.png"
import {Link} from "react-router-dom";
import TermForm from "../termsAndService/TermForm";
import UserType from "./UserType";

const RegisterForm = () => {
    const [inputs, setInputs] = useState({
        name: '',
        phoneNumber: '',
    })
    const {name, phoneNumber} = inputs;

    const [emailEntered, setEmailEntered] = useState('');
    const [passwordEntered, setPasswordEntered] = useState('');
    const [phoneNumberEntered, setPhoneNumberEntered] = useState('');
    const [emailValid, setEmailValid] = useState();
    const [passwordValid, setPasswordValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [checkValues, setCheckValues] = useState({
        email:'',
        password: ''
    })
    const {email, password} = checkValues;


    const onCheckValue = (e) => {
        const { name, value } = e.target;
        setCheckValues({
            ...checkValues,
            [name]: value
        })
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const onChangeEmail = (e) => {
        setEmailEntered(e.target.value);
        setFormIsValid(e.target.value.includes('@' && '.') && passwordEntered.trim() > 7);
    }

    const onChangePassword = (e) => {
        setPasswordEntered(e.target.value);
        setFormIsValid(passwordEntered.trim() > 7 && e.target.value.includes('@' && '.'));
    }

    const onEmailValidate = () => {
        setEmailValid(emailEntered.includes('@' && '.'));
    }

    const onPasswordValidate = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (passwordRegex.test(e.target.value)) {
            setPasswordValid(e.target.value)
            console.log("!!!")
            console.log(password, passwordEntered);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form className={styles.registerForm}>
            <UserType />

            <div className={styles.formInput}>
                <label htmlFor={"name"}>??????</label>
                <input
                    id={"name"}
                    name={"name"}
                    type={"text"}
                    value={name}
                    onChange={onChangeInput}
                />
            </div>
            <div className={styles.formInput}>
                <label htmlFor={"phoneNumber"}>????????? ??????</label>
                <input
                    id={"phoneNumber"}
                    name={"phoneNumber"}
                    type={"text"}
                    value={phoneNumber}
                    onChange={onChangeInput}
                />
            </div>
            <div className={styles.formInput}>
                <label htmlFor={"email"}>????????? ??????</label>
                <input
                    id={"email"}
                    type={"email"}
                    value={emailEntered}
                    onChange={onChangeEmail}
                    onBlur={onEmailValidate}
                    className={`${emailValid === false ? `${styles.inputInvalid}` : ''}`}
                />
                {emailValid === false
                    ? <span className={styles.spanInvalid}>????????? ????????? ??????????????????.</span>
                    : <span className={styles.caption}>* ????????? ????????? ????????? ???????????? ???????????????.</span>
                }

            </div>
            <div className={styles.formInput}>
                <label htmlFor={"checkEmail"}>????????? ??????</label>
                <input
                    id={"checkEmail"}
                    type={"email"}
                    name={"email"}
                    value={email}
                    onChange={onCheckValue}
                />
                {email.length > 1 &&
                    <>
                        {email !== emailEntered || email === '' || emailEntered === ''
                            ? <span className={styles.spanInvalid}>??? ????????? ????????? ???????????? ????????????.</span>
                            : <span className={styles.spanCorrect}>????????? ????????? ???????????????.</span>
                        }
                    </>
                }

            </div>
            <div className={styles.formInput}>
                <label htmlFor={"password"}>????????????</label>
                <div className={styles.passwordInput}>
                    <input
                        id={"password"}
                        type={"password"}
                        value={passwordValid}
                        onChange={onChangePassword}
                        onBlur={onPasswordValidate}
                    />
                    <button className={styles.passwordBtn} type={"button"}></button>
                </div>
                {passwordValid === false
                    ? <span className={styles.spanInvalid}>???????????? ?????? ??????: ?????????, ??????, ???????????? ?????? 8??? ??????</span>
                    : <span className={styles.caption}>*?????????, ??????, ???????????? ?????? ???????????? 8??? ??????</span>
                }
            </div>
            <div className={styles.formInput}>
                <label htmlFor={"passwordCheck"}>???????????? ??????</label>
                <div className={styles.passwordInput}>
                    <input
                        id={"passwordCheck"}
                        type={"password"}
                        name={"password"}
                        value={password}
                        onChange={onCheckValue}
                    />
                    <button className={styles.passwordBtn} type={"button"}> </button>
                    {password.length > 1 &&
                        <>
                        {password !== passwordEntered || password !== '' || passwordEntered !== ''
                            ? <span className={styles.spanInvalid}>??? ??????????????? ???????????? ????????????.</span>
                            : <span className={styles.spanCorrect}>??????????????? ???????????????.</span>
                        }
                        </>
                    }
                    {password === '' && ''}
                </div>
            </div>
            <TermForm />
        </form>
    );
};

export default RegisterForm;