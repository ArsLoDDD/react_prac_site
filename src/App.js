import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";
// import Signup from './components/Header/Signupbutton/index';
import SignIn from './components/forms/SignIn/index';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignIn />} /> // change path

        </Routes>
      </BrowserRouter>
    </>
  );
}

// const SignUp = () => <selection>SignUp</selection>;
export default App;
