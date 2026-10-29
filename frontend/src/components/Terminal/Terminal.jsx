import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { commands } from "./commands";
import "./Terminal.css";
import { TerminalContext } from "../../context/TerminalContext";

function Terminal() {
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (!isMinimized) {
      inputRef.current?.focus();
    }
  }, [isMinimized]);

  
  const navigate = useNavigate();

  const { history, setHistory } = useContext(TerminalContext);

  function minimizeTerminal() {
    setIsMinimized(true);
  }

  function killTerminal() {
    navigate("/portfolio");
  }

  function restoreTerminal() {
    setIsMinimized(false);
  }

  function toggleExpand() {
    setIsExpanded((previous) => !previous);
  }

  function handleCommand(event) {
    event.preventDefault();

    const normalizedInput = input.trim().toLowerCase();
    
    if (!normalizedInput) return;

    const [command, ...args] = normalizedInput.split(/\s+/);

    const selectedCommand = commands[command];

    if (!selectedCommand) {
      setHistory((previous) => [
        ...previous,
        `visitor@troyvolpe:~$ ${normalizedInput}`,
        `Command not found: ${normalizedInput}`,
      ]);

      setInput("");
      return;
    }

    const result = selectedCommand.execute(args);

    if (result.clear) {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((previous) => [
      ...previous,
      `visitor@troyvolpe:~$ ${normalizedInput}`,
      ...(result.output || []),
    ]);

    setInput("");

    if (result.navigate) {
      navigate(result.navigate);
    }
  }
  
  if (isMinimized) {
    return (
      <button
        type="button"
        className="terminal-restore-button"
        onClick={restoreTerminal}
      >
        Restore Terminal
      </button>
    );
  }

  return (
    <div 
      className={`terminal ${isExpanded ? "terminal-expanded" : ""}`}
      onClick={(event) => {
        if (event.target instanceof HTMLElement &&
            event.target.closest("button, a, input, textarea, select")) {
          return;
        }
        
        inputRef.current?.focus();
      }}
    >
      <div className="terminal-header">
        <div className="terminal-buttons">
          
          <button className="kill_button" title="Kills terminal"
            type="button"
            aria-label="Kill terminal"
            onClick={killTerminal}
          />
          
          <button className="minimize_button" title="Minimizes terminal"
            type="button"
            aria-label="Minimize terminal"
            onClick={minimizeTerminal}
          />
          
          <button className="expand_button" title="Restores terminal"
            type="button"
            aria-label="Expand or restore terminal"
            onClick={toggleExpand}
          />
        
        </div>

        <span className="terminal-title">
          troy@portfolio:~
        </span>
      </div>

      <div className="terminal-body">
        <div className="terminal-welcome">
          <h1>Troy Volpe</h1>
          <p>Software Development • Cybersecurity • Infrastructure</p>
          <p>Type 'help' to get started.</p>
        </div>

        <div className="terminal-history">
          {history.map((line, index) => (
            <div key={index}>{line || "\u00A0"}</div>
          ))}
        </div>

        <form onSubmit={handleCommand}>
          <label htmlFor="terminal-input">
            visitor@troyvolpe:~$
          </label>

          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal command"
            ref={inputRef}
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;