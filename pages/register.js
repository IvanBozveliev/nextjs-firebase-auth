import { useState } from 'react';
import { useAuth } from '../context/authContext'
import styles from '../styles/Register.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Register = () => {

    const { user, register } = useAuth();
    const [error, setError] = useState(null);
    const router = useRouter();

    async function registerHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        try {
            await register(email, password)
            router.push('/main')
        } catch (err) {
            setError(err)
        }


    }

    return (
        <div className={styles.registerContent}>
            {error ? (<div>{error.message}</div>) : null}
            <h2>Register Form</h2>
            <form method='POST' id={styles.registerForm} onSubmit={registerHandler}>
                <label htmlFor='inputText'>Email:</label>
                <input type='text' id={styles.textField} name='email' />
                <label htmlFor='inputPass'>Password:</label>
                <input type='password' name='password' id={styles.textField} />
                <input type='submit' id={styles.submitBtn} value='Submit' />
            </form>
            <Link href='/login'><a>login</a></Link>
        </div>

    )
}

export default Register