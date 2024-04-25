import classes from './App.module.css';

const Header = () => {
    return (
        <div className={classes.headContainer}>
            <div className={classes.headInnerContainer}>
                <div className={classes.leftContainer}>
                    Location
                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.homeContainer}>
                        Home
                    </div>
                    <div className={classes.categoryContainer}>
                        Category
                    </div>
                    <div className={classes.cartContainer}>
                        Cart
                    </div>
                    <div className={classes.loginDiv}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;