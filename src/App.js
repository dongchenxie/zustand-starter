/*
 * @Author: Dongchen Xie
 * @Date: 2020-08-10 10:25:25
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-08-10 10:51:55
 * @Description: file content
 */
import React from "react";
import "./styles.css";
import create from "zustand";
import { useStore } from "./API/store";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LanguageRoute from "./Frame/languageRouterFrame"
// const [useStore] = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 }))
// }));
export default function App() {
  const { count, inc } = useStore();
  return (
    <Router>

                 
          
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/vi">
                <LanguageRoute language={"vi"} />
              </Route>
              <Route path="/en">
                <LanguageRoute language={"en"}/>
              </Route>
              <Route path="/">
                <Redirect to="/en" />
              </Route>
           
            </Switch>
          </div>
        </Router>
  );
}
