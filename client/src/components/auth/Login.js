const Login = () => {

    const onChangeSignIn = () => {

    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign in</h1>

                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input  
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
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
                            onChange={onChangeSignIn}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Sign in"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;