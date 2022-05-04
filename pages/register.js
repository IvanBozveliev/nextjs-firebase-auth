import { useState } from 'react';
import styles from '../styles/Register.module.css';
import Link from 'next/link';

export const Register = () => {

    function registerHandler() {
        console.log('work')
    }

    return (
        <div className={styles.registerContent}>
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