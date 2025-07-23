import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import CadastroVagas from "./pages/Cadastro-vagas/CadastroVagas";



function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}></Route>
                <Route path="/login" element= {<Login />}></Route>
                <Route path="/Cadastro" element= {<Cadastro />}></Route>
                <Route path="/CadastroVagas" element= {<CadastroVagas />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
