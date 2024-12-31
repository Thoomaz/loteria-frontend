import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lotofacil from "./pages/Lotofacil";
import Megasena from "./pages/Megasena";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}> </Route>
                <Route path="/lotofacil" element= {<Lotofacil/>}></Route>
                <Route path="/megasena" element= {<Megasena/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes