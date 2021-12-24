import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import './Main.scss'

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </main>
    )
}

export default Main;
