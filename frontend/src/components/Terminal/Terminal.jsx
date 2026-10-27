import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { commands } from "./commands";
import "./Terminal.css";

function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const navigate = useNavigate();

  function handleCommand(event) {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    const selectedCommand = commands[command];

    if (!selectedCommand) {
      setHistory((previous) => [
        ...previous,
        `visitor@troyvolpe:~$ ${command}`,
        `Command not found: ${command}`,
      ]);

      setInput("");
      return;
    }

    const result = selectedCommand.execute();

    if (result.clear) {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((previous) => [
      ...previous,
      `visitor@troyvolpe:~$ ${command}`,
      ...(result.output || []),
    ]);

    setInput("");

    if (result.navigate) {
      navigate(result.navigate);
    }
  }

  return (
    <div className="terminal">
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
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;