import { useState } from "react";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { updateFormData , clearFormData } from "../../store/form/formSlice.js"; 
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {
    const {formData, handleChange} = useForm({
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-TUNOMBRE',
    });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(""); 
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password === 'mod7USIP-TUNOMBRE') {
            dispatch(updateFormData({ field: 'username', value: formData.username }));
            dispatch(updateFormData({ field: 'email', value: formData.email }));
            dispatch(updateFormData({ field: 'password', value: formData.password }));

            setModalMessage(`Bienvenido ${formData.username}!`);
            setShowModal(true);
            console.log('Formulario enviado con éxito:', formData);
        } else {
            setModalMessage("username/password incorrectos", clearFormData());
            setShowModal(true);
            console.log('La contraseña es incorrecta');
        }
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
             <ModalInfo
                visible={showModal}
                message={modalMessage} 
                onClose={onCloseModalInfo}
            />
            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <h3>{titleForm}</h3>
                </motion.div><motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="form-group">
          <label htmlFor="module">Module:</label>
          <input
            type="text"
            id="module"
            name="module"
            value={formData.module}
            onChange={handleChange}
            disabled
          />
        </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                   <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"} 
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)} 
                                style={{ marginLeft: "10px" }}
                            >
                                {showPassword ? "Ocultar" : "Ver"} 
                            </button>
        </div>
                </motion.div>
                <motion.div
                    initial={{y: 100}}
                    animate={{y: 0}}
                    transition={{duration: 0.5}}
                >
                    <button type="submit">Enviar</button>
                </motion.div>
            </form>
        </motion.div>
    );
};
export default FormWithMotionAndHook;