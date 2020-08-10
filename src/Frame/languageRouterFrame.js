/*
 * @Author: Dongchen Xie
 * @Date: 2020-07-28 13:17:07
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-08-10 12:07:58
 * @Description: file content
 */
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import About from "../Pages/About"
  import Home from "../Pages/Home"
  import Services from "../Pages/Service"
  import Blog from "../Pages/Blog"
  import Contact from "../Pages/ContactUs"
  import {useStore} from "../API/store"
  import Navbar from "./Navbar"
export default function LanguageRoute(props) {
    let { path, url } = useRouteMatch();
    const {language,setLanguage}=useStore()
    //const global=React.useContext(context)
    React.useEffect(() => {
        console.log("path:",path)
        console.log(props.language)
        console.log(language)
        setLanguage(props.language)
    }, [path])
    return (
        <div>
          <Navbar/>
        <Switch>
            <Route path={`${path}/about`}>
                <About />
            </Route>
            <Route path={`${path}/service`}>
                <Services/>
            </Route>
            <Route path={`${path}/blog`}>
                <Blog/>
            </Route>
            <Route path={`${path}/contant`}>
                <Contact/>
            </Route>
            <Route path={`${path}`}>
                <Home />
            </Route>
        </Switch>
        </div>
   

    )
}