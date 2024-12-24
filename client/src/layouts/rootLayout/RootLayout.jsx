import {Outlet, Link} from 'react-router-dom'
import '../rootLayout/rootLayout.css'
import {ClerkProvider, SignedIn, UserButton, SignedOut, SignInButton} from '@clerk/clerk-react'

// Importing Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
  return (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">     
        <div className="rootLayout">
          <header>
            <Link to="/" className="logo">
              <img src="/logo_kai.png" alt="" />
            </Link>
            <div className="user">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </ClerkProvider>
  )
}

export default RootLayout