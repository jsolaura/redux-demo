import React from 'react';
import styles from "../Sign.module.css";
import Container from "../../../components/UI/container/Container";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return (
        <Container className={styles.register}>
            <h1>회원가입</h1>
            <h3>회원가입 후, 큐피커의 다양한 서비스를 이용해보실 수 있습니다.</h3>
            <RegisterForm />
        </Container>
    );
};

export default Register;