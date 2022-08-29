import { Container } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavSm from "../../components/NavSm/NavSm";
import styles from "./BasicLayout.module.scss";

const BasicLayout = ({ children, footer = true }) => {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <div className={styles.basic_layout_container}>
        <Navbar />
        <NavSm />
        {children}
      </div>
      {footer ? <Footer /> : null}
    </Container>
  );
};

export default BasicLayout;
