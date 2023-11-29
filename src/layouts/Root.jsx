import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Root.css"
import UsuarioHeader from "../components/Usuario/UsuarioHeader";


function Root() {
    return (
        <div>
            <UsuarioHeader/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Root;