import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { atoms, selector } from "@src/store";
const Login = () => {
  const [token, setToken] = useRecoilState(atoms.user.token);
  const userToken = useRecoilValue(selector.user.userToken);
  useEffect(() => {
    setTimeout(() => {
      setToken("token");
    }, 2000);
  }, [setToken]);

  return (
    <div>
      <h1>login</h1>
      <p>
        {token}/{userToken}
      </p>
    </div>
  );
};

export default Login;
