import classes from './App.module.css';
const Register = (props) => {
    return (<div className={classes.RegisterContainer}>
        <div className={classes.usernameContainer}>
            <div className={classes.loginRegisterContainer}>
                <div className={classes.loginContainer} onClick={props.onPress}>
                    Login
                </div>
                <div className={classes.loginContainer} >
                <b>Register</b>
                </div>
            </div>
            <div className={classes.usernameDiv}>
                User Name *
                <input type="text" className={classes.inputContainer}/>
            </div>
            <div className={classes.usernameDiv}>
                Email *
                <input type="text" className={classes.inputContainer}/>
            </div>
            <div className={classes.usernameDiv}>
                Password *
                <input type="password" className={classes.inputContainer}/>
            </div>
            <div className={classes.checkboxContainer}>
<div>
<input type="checkbox"
                checked={true}
            />
</div>
            
Your personal data will be used to support your experience 
throughout this website, to manage access to your account,
and for other purposes described in our privacy policy.            </div>
            <button className={classes.buttons}>Register</button>

        </div>

    </div>)
}
export default Register;