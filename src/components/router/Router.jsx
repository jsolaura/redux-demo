import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../../pages/sign/login/Login";
import Register from "../../pages/sign/register/Register";
import Header from "../layout/header/Header";
import Main from "../main/Main";
import Footer from "../layout/footer/Footer";


// 자동 로그인 처리 or 쿠키 약관 동의, 로그인, 회원가입
const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Header />
            {isLoggedIn && <Header />}
            <Switch>
                <>
                {isLoggedIn
                    ? <Route exact path={"/"}><Main /></Route>
                    : (
                        <div className={"wrapper"}>
                            <Route exact path={"/login"}><Login /></Route>
                            <Route exact path={"/register"}><Register /></Route>
                        </div>
                    )
                }
                </>
            </Switch>
            <Footer />
        </Router>
    );
};

export default AppRouter;