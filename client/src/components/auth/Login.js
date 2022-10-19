import { useState } from "react";
import { Link }from 'react-router-dom';

const Login = () => {

    
    // Log in state
    const [ user, saveUser ] = useState({
        email: '',
        password: ''
    });
    
    // Extract from user
    const { email, password } = user;


    const onChangeSignIn = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    // When user wants to log in
    const onSubmitSignIn = e => {
        e.preventDefault();

        // Validate that there are no empty field

        // Pass to action in reducer
    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log in</h1>

                <form
                    onSubmit={onSubmitSignIn}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input  
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={onChangeSignIn}
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
                            onChange={onChangeSignIn}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Log in"
                        />
                    </div>
                </form>

                <Link to={'/new-account'} className="enlace-cuenta">
                    New Account
                </Link>
            </div>
        </div>
    );
}
 
export default Login;