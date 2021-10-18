import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Component library</code>
        </p>
        <a
          className="App-link"
          href="https://mycontributionsapp.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Main App
        </a>
      </header>
    </div>
  );
}

export default App;
