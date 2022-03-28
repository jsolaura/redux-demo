import React from 'react';
import logo from '../../asset/image/qpicker-logo.png';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Login from "../login/Login";

const Header = () => {
    return (
        <>
        <header>
            <h1><img src={logo} alt={"logo"}/></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/login"}>로그인</NavLink>
                        <NavLink to={"/register"}>회원가입</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Router>
            <Route exact path={"/login"}><Login /></Route>
            {/*<Route exact path={"/register"}></Route>*/}
        </Router>
        </>
    )
};

export default Header;