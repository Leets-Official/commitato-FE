import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [allUserData, setAllUserData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        userData,
        setUserData,
        allUserData,
        setAllUserData,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
