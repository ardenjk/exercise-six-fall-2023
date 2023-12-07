import styles from './components.module.css';


const LoginForm = ({loginUser}) => {
    //e represents the element that the function called on; in this case it is the entire form 
    return (
        <div>
            <h2>Login Form</h2>
            <form className = {styles.Form} onSubmit={(e) => loginUser(e)}>
                <label htmlFor="email">Name</label>
                <input type="email" name="email" />

                <label htmlFor="pass">Email</label>
                <input type="password" name="pass" />

                <button type = "submit">Create User</button>
            </form>
        </div>
    );
};

export default LoginForm;


