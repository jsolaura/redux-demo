import './App.css';
import AddNumberRoot from "./components/xxx/addNumber/AddNumberRoot";
import DisplayNumberRoot from "./components/xxx/displayNumber/DisplayNumberRoot";
import ShippingRoot from "./components/xxx/shpping/ShippingRoot";
import ShippingCount from "./components/xxx/shpping/ShippingCount";
import Login from "./pages/sign/login/Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/layout/header/Header";
import {useState} from "react";
import AppRouter from "./components/router/Router";


// 페이지 진입 과정
function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <div className="App">
            <AppRouter isLoggedIn={isLoggedIn} />
            {init
                ? <AppRouter isLoggedIn={isLoggedIn} />
                : ""
            }
        </div>
    );
}

export default App;
