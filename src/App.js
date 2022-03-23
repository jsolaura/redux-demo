import './App.css';
import AddNumberRoot from "./components/addNumber/AddNumberRoot";
import DisplayNumberRoot from "./components/displayNumber/DisplayNumberRoot";
import ShippingRoot from "./components/shpping/ShippingRoot";
import ShippingCount from "./components/shpping/ShippingCount";

function App() {
    return (
        <div className="App">
            <h1 className={"h1Wrap"}>Root <ShippingCount /></h1>
            <div className={"container"}>
                <AddNumberRoot />
                <DisplayNumberRoot />
            </div>
            <ShippingRoot />
        </div>
    );
}

export default App;
