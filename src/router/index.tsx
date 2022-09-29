import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import NotFound from "@src/pages/NotFound";
import { Login } from "@src/pages";
function Router() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Template>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Template>
      </BrowserRouter>
    </RecoilRoot>
  );
}

const Template = styled.div`
  height: 100vh;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Router;
