import React, {useState} from 'react';
import styles from "./Header.module.css";
import logo from '../../../asset/image/qpicker-logo.png';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Login from "../../../pages/sign/login/Login";

const Header = () => {
    return (
        <div className={styles.headerWrap}>
            <header>
                <h1><img src={logo} alt={"logo"}/></h1>
                <nav>
                    <ul className={styles.gnb}>
                        <li>
                            <NavLink exact to={"/login"}>로그인</NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"/register"}>회원가입</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export default Header;