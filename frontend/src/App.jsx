import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/firstpage/firstpage";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Forgot from "./components/login/forgotpass";
import Reset from "./components/login/resetpass";
import Home from "./components/home/home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    dispatch(authActions.login());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpass" element={<Forgot />}></Route>
        <Route path="/resetpass/:id/:token" element={<Reset />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
