import classes from './App.module.css';

const Login = (props) => {
    return (<div className={classes.LoginContainer}>
        <div className={classes.usernameContainer}>
            <div className={classes.loginRegisterContainer}>
                <div className={classes.loginContainer}>
                    <b>Login</b>
                </div>
                <div className={classes.loginContainer} onClick={props.onPress}>
                    Register
                </div>
            </div>
            <div className={classes.usernameDiv}>
                User Name or Email *
                <input type="text" className={classes.inputContainer}/>
            </div>
            <div className={classes.usernameDiv}>
                Password *
                <input type="password" className={classes.inputContainer}/>
            </div>
            <div className={classes.checkboxContainer}>

            <input type="checkbox"
                checked={true}
            />
            Remember me
            </div>
            <button className={classes.buttons}>Login</button>

        </div>

    </div>)
}
export default Login;