import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../Button/Button";
import Episode from "../Episode/Episode";
import styles from "./RecentEpisodes.module.scss";

const RecentEpisodes = ({ title, showTabs = false }) => {
  return (
    <div className={styles.recent_episodes_container}>
      <div className={styles.recent_episodes_heading}>
        <div className={styles.content}>
          <Typography variant="h2">{title}</Typography>
          {showTabs ? (
            <div className={styles.tabs_container}>
              <div className={styles.tab_active}>
                <Typography variant="body1">
                  <Link underline="hover">All Podcasts</Link>
                </Typography>
              </div>
              <div className={styles.tab}>
                <Typography variant="body1">
                  <Link underline="hover">Startup</Link>
                </Typography>
              </div>
              <div className={styles.tab}>
                <Typography variant="body1">
                  <Link underline="hover">Marketing</Link>
                </Typography>
              </div>
              <div className={styles.tab}>
                <Typography variant="body1">
                  <Link underline="hover">Business</Link>
                </Typography>
              </div>
            </div>
          ) : (
            <Typography variant="body1">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </Typography>
          )}
        </div>
        <div className={styles.btn_container}>
          <PrimaryButton>See All Episodes</PrimaryButton>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Episode />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Episode />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Episode />
        </Grid>
      </Grid>
    </div>
  );
};

export default RecentEpisodes;
