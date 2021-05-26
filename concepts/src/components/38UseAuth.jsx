import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from "app/utils"
import LoggedIn from "app/LoggedIn"
import LoggedOut from "app/LoggedOut"

// Hook for useAuth
function useAuth() {
  const [auth, setAuth] = useState(null);
  const [authAttempted, setAuthAttempted] = useState(false);

  // Run Auth subscription only once when component redners
  useEffect(() => {
    const unsub = onAuthStateChanged(auth => {
      setAuthAttempted(true)
      setAuth(auth)
      // set state
    })

    return unsub // when the component unmounts...
  }, [])

  return { auth, authAttempted }
}

function AuthCode() {
  const { auth, authAttempted } = useAuth();
  if(!authAttempted) return <p>Authenticating...</p>

  return (
    <div className="Layout">
      {auth ? <LoggedIn auth={auth} /> : <LoggedOut/>}
    </div>
  )
}

export default AuthCode
