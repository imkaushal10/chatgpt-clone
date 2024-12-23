import {Outlet, Link} from 'react-router-dom'
import '../rootLayout/rootLayout.css'

const RootLayout = () => {
  return (
    <div className="rootLayout">
          <header>
            <Link to="/" className="logo">
              <img src="/logo_kai.png" alt="" />
            </Link>
            <div className="user">
              User
              {/* <SignedIn>
                <UserButton />
              </SignedIn> */}
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
  )
}

export default RootLayout