import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export const NavBar = () => {
    return (
        <div className={styles.headerContent}>
            <div className={styles.linkContent}>

                <p><Link href='/login' ><a>Login</a></Link></p>
                <p><Link href='/register' ><a>Register</a></Link></p>
                {/* {isAuth ? loggedInUser() : loggedOutUser()} */}

            </div>


        </div>
    )
}