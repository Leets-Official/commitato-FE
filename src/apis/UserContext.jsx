import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [allUserData, setAllUserData] = useState(null);
  const [userExp, setUserExp] = useState(null);
  const [userTierName, setUserTierName] = useState(null);
  const [userConsecutiveCommitDays, setUserConsecutiveCommitDays] =
    useState(null);
  const [userTotalCommitCount, setUserTotalCommitCount] = useState(null);
  const [userTodayCommitCount, setUserTodayCommitCount] = useState(null);
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
        userExp,
        setUserExp,
        userTierName,
        setUserTierName,
        userConsecutiveCommitDays,
        setUserConsecutiveCommitDays,
        userTotalCommitCount,
        setUserTotalCommitCount,
        userTodayCommitCount,
        setUserTodayCommitCount,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
