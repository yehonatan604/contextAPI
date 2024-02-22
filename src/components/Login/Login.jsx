const Login = () => {

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <h1>Login</h1>

            <form>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" />
                </div>
                <input onClick={handleClick} type="submit" value={"Login"} />
            </form>
        </div>
    );
}

export default Login;