import styles from '../styles/Register.module.css';
import Link from 'next/link';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/router';

const Login = () => {

    let { user, login } = useAuth();
    const router = useRouter();

    async function loginHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        try {
            await login(email, password)
            router.push('/main')
        } catch (err) {
            console.log(err)
        }

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
            <Link href='/register'><a>register</a></Link>
        </div>

    )
}

export default Login