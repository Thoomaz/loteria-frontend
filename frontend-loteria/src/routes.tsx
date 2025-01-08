import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Lotofacil from "./pages/lotofacil";
import Megasena from "./pages/megasena";
import Page from "./pages/poolPage/Index";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}> </Route>
                <Route path="/lotofacil" element= {<Lotofacil/>}></Route>
                <Route path="/megasena" element= {<Megasena/>}></Route>
                <Route path="/:title" element={<Page/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes