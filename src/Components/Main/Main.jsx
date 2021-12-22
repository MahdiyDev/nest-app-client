import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import LeftContainer from "../LeftContainer/LeftContainer";
import './Main.scss'

function Main() {
    return (
        <main>
            <LeftContainer />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </main>
    )
}

export default Main;
