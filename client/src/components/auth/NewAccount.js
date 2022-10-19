import { useState } from "react";
import { Link }from 'react-router-dom';

const NewAccount = () => {

    
    // Sign in state
    const [ user, saveUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });
    
    // Extract from user
    const { name, email, password, confirm } = user;


    const onChangeSignUp = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    // When user wants to sign in
    const onSubmitSignUp = e => {
        e.preventDefault();

        // Validate that there are no empty field

        // Pass to action in reducer
    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign up</h1>

                <form
                    onSubmit={onSubmitSignUp}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input  
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={onChangeSignUp}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input  
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={onChangeSignUp}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input  
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={onChangeSignUp}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input  
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repeat Your Password"
                            value={confirm}
                            onChange={onChangeSignUp}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Sign up"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Already have an account? Log in
                </Link>
            </div>
        </div>
    );
}
 
export default NewAccount;