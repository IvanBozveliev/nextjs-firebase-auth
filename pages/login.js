import styles from '../styles/Register.module.css';
import Link from 'next/link';
export const Login = () => {

    function loginHandler() {
        console.log('work')
    }

    return (
        <div className={styles.registerContent}>
            <h2>Login Form</h2>
            <form method='POST' id={styles.registerForm} onSubmit={loginHandler}>
                <label htmlFor='inputText'>Email:</label>
                <input type='text' id={styles.textField} name='email' />
                <label htmlFor='inputPass'>Password:</label>
                <input type='password' name='password' id={styles.textField} />
                <input type='submit' id={styles.submitBtn} value='Submit' />
            </form>
            <Link href='/register.js'><a>register</a></Link>
        </div>

    )
}