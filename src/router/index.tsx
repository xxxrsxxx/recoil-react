import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { atoms } from "@src/store";
import { Main, Login } from "@src/pages";
import styled from "styled-components";

function Router() {
  const userToken = useRecoilValue(atoms.user.token);
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          {userToken ? (
            <>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </Template>
    </BrowserRouter>
  );
}

const Template = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Router;
