import React from "react";
import "./styles.css";
import create from "zustand";
import { useStore } from "./API/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

// const [useStore] = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 }))
// }));
export default function App() {
  const { count, inc } = useStore();

  return (
    <Router>
      <div className="App">
        <button onClick={inc}>+++</button>
        <div>{count}</div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
