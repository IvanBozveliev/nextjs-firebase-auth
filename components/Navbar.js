import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useAuth } from '../context/authContext';

export const NavBar = () => {

    let { user } = useAuth();
    console.log(user)
    function loggedInUser() {
        return (
            <>

                <p><Link href='/main' ><a>Main Page</a></Link></p>
                <p><Link href='#' ><a>Welcome, {user.email}</a></Link></p>
                <p><Link href='/' ><a>Logout</a></Link></p>
            </>
        )
    }

    function loggedOutUser() {
        return (
            <>

                <p><Link href='/login' ><a>Login</a></Link></p>
                <p><Link href='/register' ><a>Register</a></Link></p>
            </>
        )
    }
    return (
        <div className={styles.headerContent}>
            <div className={styles.linkContent}>


                {user ? loggedInUser() : loggedOutUser()}

            </div>


        </div>
    )
}