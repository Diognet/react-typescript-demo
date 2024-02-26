import { useState } from 'react';

export const LoggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const hanleLogin = () => {
    setisLoggedIn(isLoggedIn ? false : true);
  };

  return (
    <div>
      <button onClick={hanleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      <div>User is {isLoggedIn ? 'logged in' : 'Logged out'}</div>
    </div>
  );
};
