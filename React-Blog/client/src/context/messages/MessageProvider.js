import React from 'react';
import { useReducer } from 'react';
import MessageContext from './MessageContext';
const defaultState = {
  isMessage: false,
  Message: undefined,
};
const HandelReducer = (state, action) => {
  if (action.type === 'Throw') {
    return {
      isMessage: true,
      Message: action.Message,
    };
  } else if (action.type === 'Clear') {
    return {
      isMessage: false,
      Message: undefined,
    };
  }
  return defaultState;
};
function MessageProvider(props) {
  const [state, dispatch] = useReducer(HandelReducer, defaultState);
  const ThrowMessage = (message) => {
    return dispatch({
      type: 'Throw',
      Message: message,
    });
  };
  const ClearMessage = () => {
    return dispatch({
      type: 'Clear',
    });
  };
  const ContextValue = {
    isMessage: state.isMessage,
    Message: state.Message,
    ThrowMessage: ThrowMessage,
    ClearMessage: ClearMessage,
  };
  return (
    <MessageContext.Provider value={ContextValue}>
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessageProvider;
