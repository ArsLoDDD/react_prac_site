import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
// import Signup from './components/Header/Signupbutton/index';
import SignIn from './components/SignIn/index';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<SignIn />} /> // change path

        </Routes>
      </BrowserRouter>
    </>
  );
}

// const SignUp = () => <selection>SignUp</selection>;
export default App;
