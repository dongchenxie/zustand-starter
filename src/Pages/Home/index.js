import React from "react";
import { useStore } from "../../API/store";
function Home() {
  const { count, inc } = useStore();
  return (
    <>
      <div>{count}</div>
      <button onClick={inc}>+++</button>
      <h2>Home</h2>
    </>
  );
}
export default Home;
