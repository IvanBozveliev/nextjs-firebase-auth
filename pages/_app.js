import { NavBar } from '../components/Navbar'
import '../styles/globals.css'
import { AuthContextProvider } from '../context/authContext';

function MyApp({ Component, pageProps }) {
  return <AuthContextProvider>

    <NavBar />
    <Component {...pageProps} />

  </AuthContextProvider>
}

export default MyApp
