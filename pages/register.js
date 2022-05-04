import { useState } from 'react';
import styles from '../styles/Register.module.css';

export const Register = () => {

    function registerHandler() {
        console.log('work')
    }

    return (
        <form method='POST' id={styles.registerForm} onSubmit={registerHandler}>
            <label htmlFor='inputText'>Email:</label>
            <input type='text' name='email' id='inputText' />
            <label htmlFor='inputPass'>Password:</label>
            <input type='password' name='password' id='inputPass' />
            <input type='submit' id='submitBtn' value='Submit' />
        </form>
    )
}