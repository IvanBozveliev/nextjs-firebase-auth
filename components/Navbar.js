import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export const NavBar = () => {
    return (
        <div className={styles.headerContent}>
            <div className='webTitle'>
                <p><Link href='/login' >Login</Link></p>
                <p><Link href='/register' >Register</Link></p>
                <nav className='navigationHeader'>

                    {/* {isAuth ? loggedInUser() : loggedOutUser()} */}

                </nav>

            </div>


        </div>
    )
}