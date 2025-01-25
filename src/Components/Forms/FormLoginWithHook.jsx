import useForm from "../Hooks/useForm.js";

const FormLoginWithHook = ({ titleForm }) => {
    const { formData, handleChange } = useForm({
        module: 'React Mod7',
        username: 'KevinPaz',
        email: 'thelof.18@gmail.com',
        password: 'mod7USIP-KevinPaz',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label>
                        Modulo:
                        <input
                            type='text'
                            name='modulo'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Username:
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type='password'
                            name='password'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default FormLoginWithHook;