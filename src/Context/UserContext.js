import React, { useState } from 'react';

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

//IF USER DATA WERE IN A DB
//   const fetchCurrentUser = async () => {
//     let response = await fetch("/api/users/current")
//     response = await response.json()
//     setCurrentUser(response)
//   }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => useContext(CurrentUserContext)