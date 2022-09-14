import React from "react";
const MessageContext = React.createContext({
  isMessage: false,
  Message: undefined,
  ThrowMessage: (message) => {},
  ClearMessage: () => {},
});
export default MessageContext;
