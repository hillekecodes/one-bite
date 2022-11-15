import React, { useState } from 'react';

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
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
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => useContext(CurrentUserContext)
