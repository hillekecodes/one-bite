import React, { useState, useContext } from 'react';
import App from '../App';

export const CurrentUserContext = React.createContext()

export default function CurrentUserProvider () {
  const [currentUser, setCurrentUser] = useState(null)

  const actions = {
    // list all shared functions here
    setCurrentUser
  }

  const state = {
    // list all state values,
    currentUser
  }

  return (
    <CurrentUserContext.Provider value={{ state, actions }}>
      <App />
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => useContext(CurrentUserContext)
