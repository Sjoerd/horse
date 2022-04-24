import AppLayout from '../components/layout/AppLayout'
import AuthLayout from '../components/layout/AuthLayout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  let userLoggedIn = false;

  
  if (userLoggedIn) {
    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    )
  }

  return (
    <AuthLayout>
      <Component { ...pageProps } />
    </AuthLayout>
  )

  
}

export default MyApp
