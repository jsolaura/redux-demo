import React, {useEffect, useState} from 'react';
import styles from '../Sign.module.css';
import Container from "../../../components/UI/container/Container";
import Button from "../../../components/UI/button/Button";
import LoginForm from "./LoginForm";

const Login = () => {

    return (
        <Container className={styles.login}>
            <h1>로그인</h1>
            <LoginForm />
            {/*<h3>회원가입 후, 큐피커의 다양한 서비스를 이용해보실 수 있습니다.</h3>*/}
        </Container>
    );
};

export default Login;