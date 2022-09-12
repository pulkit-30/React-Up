import React from 'react';
const UserContext = React.createContext({
  User: null,
  LogIn: (User) => {},
  LogOut: () => {},
});
export default UserContext;
