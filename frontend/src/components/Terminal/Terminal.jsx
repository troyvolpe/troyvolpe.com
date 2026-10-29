import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { commands } from "./commands";
import "./Terminal.css";

function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const navigate = useNavigate();

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

  return (
    <div 
      className="terminal"
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
          <span />
          <span />
          <span />
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