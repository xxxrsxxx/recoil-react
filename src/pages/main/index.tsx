import React from "react";
import { useRecoilState } from "recoil";
import { atoms } from "@src/store";
import MainLazyListContainer from "../../containers/MainLazyListContainer";
const Main = () => {
  const [token, setToken] = useRecoilState(atoms.user.token);
  const tokenRemoveHandle = () => {
    setToken("");
  };

  return (
    <>
      <h1>main</h1>
      <button onClick={tokenRemoveHandle}>{token} remove</button>
      <div style={{ height: "500px" }}>---</div>
      <MainLazyListContainer />
    </>
  );
};

export default Main;
