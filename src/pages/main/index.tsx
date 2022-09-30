import React from "react";
import { useRecoilState } from "recoil";
import { atoms } from "@src/store";
const Main = () => {
  const [token, setToken] = useRecoilState(atoms.user.token);

  const tokenRemoveHandle = () => {
    setToken("");
  };

  return (
    <>
      <h1>main</h1>
      <button onClick={tokenRemoveHandle}>{token} remove</button>
    </>
  );
};

export default Main;
