import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import Blog from "../Blog/Blog";
import styles from "./AllBlogs.module.scss";

const AllBlogs = ({ title, showTabs = false }) => {
  return (
    <div className={styles.recent_episodes_container}>
      <div className={styles.recent_episodes_heading}>
        <div className={styles.content}>
          <Typography variant="h2">{title}</Typography>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Blog />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Blog />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Blog />
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <Blog />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Blog />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Blog />
        </Grid>
      </Grid>
    </div>
  );
};

export default AllBlogs;
