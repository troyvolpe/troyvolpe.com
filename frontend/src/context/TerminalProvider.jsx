import { useState } from "react";
import { TerminalContext } from "./TerminalContext";

function TerminalProvider({ children }) {
  const [history, setHistory] = useState([]);

  return (
    <TerminalContext.Provider value={{ history, setHistory }}>
      {children}
    </TerminalContext.Provider>
  );
}

export default TerminalProvider;