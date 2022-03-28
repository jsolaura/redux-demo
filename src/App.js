import './App.css';
import AddNumberRoot from "./components/addNumber/AddNumberRoot";
import DisplayNumberRoot from "./components/displayNumber/DisplayNumberRoot";
import ShippingRoot from "./components/shpping/ShippingRoot";
import ShippingCount from "./components/shpping/ShippingCount";
import Login from "./components/login/Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <div className={"container"}>
                            <Login />
                            {/*<AddNumberRoot />*/}
                            {/*<DisplayNumberRoot />*/}
                        </div>
                    </Route>
                </Switch>
            </Router>

            {/*<ShippingRoot />*/}
        </div>
    );
}

export default App;
