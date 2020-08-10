/*
 * @Author: Dongchen Xie
 * @Date: 2020-08-10 11:54:10
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-08-10 12:08:25
 * @Description: file content
 */
import React from "react";
import { useStore } from "../API/store";
import { Link,useRouteMatch } from "react-router-dom";
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

function Home() {
    const [subPath,setSubPath]=React.useState("")
    const { count, inc, language } = useStore();
    let { path, url } = useRouteMatch();
    React.useEffect(() => {
        console.log("current location", window.location.pathname)
        let path=window.location.pathname
        setSubPath(path.substring(getPosition(path,"/",2),path.length))
    }, [window.location.pathname])
    return (
        <>
            <Link to={`${url}`} >Home</Link>
            <Link to={`${url}/service`} >Service</Link>
            <Link to={`${url}/blog`} >Blog</Link>
            <Link to={`${url}/contact`} >Contact Us</Link>
            <Link to={`${url}/about`} >About Us</Link>
            <Link to={`/vi${subPath}`} >Vietnamese</Link>
       
            <Link to={`/en${subPath}`} >English</Link>
        </>
    );
}
export default Home;