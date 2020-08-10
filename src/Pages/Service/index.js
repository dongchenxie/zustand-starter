/*
 * @Author: Dongchen Xie
 * @Date: 2020-08-10 10:36:58
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-08-10 12:09:11
 * @Description: file content
 */
import React from "react";
import { useStore } from "../../API/store";
function Home() {
  const { count, inc,language } = useStore();
  return (
    <>
      {/* <div>{count}</div>
      <button onClick={inc}>+++</button> */}
      <h2>service</h2>
      <div>language is :{language}</div>
    </>
  );
}
export default Home;