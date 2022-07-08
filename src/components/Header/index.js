import React from "react";
import styles from "./Header.module.scss";
import Signupbutton from "./Signupbutton/index";
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={styles.flex}>
       <Link to="/"><img src="/static/images/logo.png" alt="logo" /></Link>
      <Link to="/signup" style={{textDecoration: 'none'}}><Signupbutton /></Link>
    </div>
  );
};

export default Header;

{/* <Link render={({ field, meta }) => {
  const pathRender = cx(styles.input, {
    [styles.valid]: !meta.error,
    [styles.invalid]: meta.error,
  });
  return < pathRender />;
}} />   */}