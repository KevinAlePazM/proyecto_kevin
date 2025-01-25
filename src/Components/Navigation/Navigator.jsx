import { Link } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData } from "../../store/form/formSlice";
import ModalInfo from "../Modals/ModalInfo"; 
import useForm from "../Hooks/useForm"; 

const Navigator = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false); 
    
    const dispatch = useDispatch();
    const { resetForm } = useForm({
        module: "React Mod7",
        username: "UsuarioEjemplo", 
        email: "usuario@ejemplo.com", 
        password: "mod7USIP-TUNOMBRE",
    });

    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleCloseModal = () => {
        setShowLogoutModal(false);
    };

    const handleConfirmLogout = () => {
        dispatch(clearFormData()); 
        resetForm(); 
        setShowLogoutModal(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>

            <button className="logout-btn" onClick={handleLogoutClick}>
                Logout
            </button>

            <ModalInfo
                visible={showLogoutModal}
                message="¿Estás seguro de que quieres cerrar sesión?"
                onClose={handleCloseModal}
                onConfirm={handleConfirmLogout} 
            />
        </nav>
    );
};

export default Navigator;
