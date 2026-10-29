import { useState } from "react";
import { TerminalContext } from "./TerminalContext";

function TerminalProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [isFloatingOpen, setIsFloatingOpen] = useState(false);
  const [isFloatingExpanded, setIsFloatingExpanded] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);

  return (
    <TerminalContext.Provider 
        value={{ 
            history, 
            setHistory,
            isFloatingOpen,
            setIsFloatingOpen,
            isFloatingExpanded,
            setIsFloatingExpanded,
            commandHistory,
            setCommandHistory,
        }}
    >
        {children}
    </TerminalContext.Provider>
  );
}

export default TerminalProvider;