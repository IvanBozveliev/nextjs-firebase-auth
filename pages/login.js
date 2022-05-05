import styles from '../styles/Register.module.css';

import Link from 'next/link';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Login = () => {

    let { login } = useAuth();
    let [error, setError] = useState('');

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 4000)
    }, [error])

    async function loginHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        try {
            await login(email, password)
            router.push('/main')
        } catch (err) {

            let errorMessage = err.code;
            if (errorMessage == 'auth/invalid-email') {
                setError('This email is not valid')
            } else if (errorMessage == 'auth/wrong-password') {
                setError('Wrong password')
            }

        }

    }



    return (
        <div className={styles.registerContent}>
            {error ? <div className={styles.errorMessage}>{error}</div> : null}
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