import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TerminalContext } from "../../context/TerminalContext";
import Terminal from "./Terminal";

function FloatingTerminal() {
  const location = useLocation();
    const {
        isFloatingOpen,
        setIsFloatingOpen,
        isFloatingExpanded,
    } = useContext(TerminalContext);

  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      {isFloatingOpen ? (
        <div
            className={`floating-terminal-container ${
                isFloatingExpanded ? "floating-terminal-container-expanded" : ""
            }`}
>
          <Terminal mode="floating" />
        </div>
      ) : (
        <button
          type="button"
          className="floating-terminal-launcher"
          onClick={() => setIsFloatingOpen(true)}
        >
          Open Terminal
        </button>
      )}
    </>
  );
}

export default FloatingTerminal;