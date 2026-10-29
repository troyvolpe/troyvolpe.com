import { useState } from "react";
import { TerminalContext } from "./TerminalContext";

function TerminalProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [isFloatingOpen, setIsFloatingOpen] = useState(false);
  const [isFloatingExpanded, setIsFloatingExpanded] = useState(false);

  return (
    <TerminalContext.Provider 
        value={{ 
            history, 
            setHistory,
            isFloatingOpen,
            setIsFloatingOpen,
            isFloatingExpanded,
            setIsFloatingExpanded,
        }}
    >
        {children}
    </TerminalContext.Provider>
  );
}

export default TerminalProvider;