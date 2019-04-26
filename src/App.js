import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          <FormattedMessage
            id="app.title"
            defaultMessage="Welcome to {what}"
            description="Welcome header on app main page"
            values={{ what: "react-intl" }}
          />
        </h1>
        <FormattedHTMLMessage
          id="app.intro"
          defaultMessage="To get started, edit <code>src/App.js</code> and save to reload."
          description="Text on main page"
        />
      </header>
    </div>
  );
}

export default App;
