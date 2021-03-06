import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import { useAuth0 } from '@auth0/auth0-react'
import NavLoading from '../NavLoading'

function AuthNav (props) {

const { user , logout, isAuthenticated, isLoading, loginWithRedirect} = useAuth0()

function handleLogoff(e) {
    e.preventDefault()
    logout({ returnTo: window.location.origin })
  }

  // this function is unused - for checking
  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  if (isLoading) {
    return <NavLoading />;
  }

return(
    
    <Nav>
    
    {
      isAuthenticated ?
     <>
          
     <Nav.Link href="/resident">
      <Image
        src={user?.picture}
        title="my page"
        fluid="true"
        className="nav-user-pic"
        roundedCircle={true} 
      />
      
      </Nav.Link>
      <Nav.Link onClick={handleLogoff}>Logout</Nav.Link> 
      </>
      : <Nav.Link variant="primary" onClick={handleSignIn}>Login</Nav.Link>

    }
    
  </Nav>

)
}

export default AuthNav