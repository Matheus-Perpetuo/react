import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home />}></Route>
                <Route path="/login" element= {<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
