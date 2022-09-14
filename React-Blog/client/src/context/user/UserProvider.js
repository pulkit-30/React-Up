import React, { useEffect, useReducer } from 'react';
import UserContext from './UserContext';
const defaultState = {
  User: JSON.parse(localStorage.getItem('User')) || null,
};
const HandelAction = (state, action) => {
  if (action.type === 'LogIn') {
    return {
      User: action.User,
    };
  } else if (action.type === 'LogOut') {
    return {
      User: null,
    };
  }
  return defaultState;
};
function AuthProvider(props) {
  const [state, dispatch] = useReducer(HandelAction, defaultState);
  // On State Change
  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(state.User));
  }, [state]);

  const LogIn = (User) => {
    dispatch({
      type: 'LogIn',
      User: User,
    });
  };
  const LogOut = () => {
    dispatch({
      type: 'LogOut',
    });
  };

  const StateValue = {
    User: state.User,
    LogIn: LogIn,
    LogOut: LogOut,
  };
  return (
    <UserContext.Provider value={StateValue}>
      {props.children}
    </UserContext.Provider>
  );
}

export default AuthProvider;
