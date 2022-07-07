import React from "react";
import styles from "./Header.module.scss";
import Signup from "./Signupbutton/index";
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={styles.flex}>
       <Link to="/"><img src="/static/images/logo.png" alt="logo" /></Link>
      <Link to="/signup" style={{textDecoration: 'none'}}><Signup /></Link>
    </div>
  );
};

export default Header;
