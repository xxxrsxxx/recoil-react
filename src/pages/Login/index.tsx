import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { atoms, selector } from "@src/store";
const Login = () => {
  const [token, setToken] = useRecoilState(atoms.user.token);
  const userToken = useRecoilValue(selector.user.userToken);
  useEffect(() => {
    setToken("setToken");
  }, []);

  return (
    <div>
      <h1>start</h1>
      <p>{token}</p>
      <p>{userToken}</p>
    </div>
  );
};

export default Login;
