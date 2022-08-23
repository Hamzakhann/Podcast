import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Approaches.module.scss";

const Approaches = () => {
  return (
    <div className={styles.approaches_container}>
      <div className={`${styles.design_bar_green} designBarGreenLarge`}></div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={styles.approaches}>
            <Typography variant="h2">My origins on YouTube in 2008</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              eget condimentum enim libero ultricies amet odio fringilla. Ut
              nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
              eget in ut integer viverra sed. Penatibus tortor consequat,
              habitasse non nisl.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
              lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
              volutpat ut netus malesuada enim penatibus non aliquet.
            </Typography>
            <div
              className={`${styles.design_bar_purple} designBarPurple`}
            ></div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.approaches}>
            <div className={styles.approaches}>
              <Typography variant="h2">
                From tech journalist, to Vlogger and YouTuber
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
                cras lacus tellus morbi viverra suspendisse ornare. Sit
                volutpat, volutpat ut netus malesuada enim penatibus non
                aliquet.
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget condimentum enim libero ultricies amet odio fringilla. Ut
                nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                eget in ut integer viverra sed. Penatibus tortor consequat,
                habitasse non nisl.
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget condimentum enim libero ultricies ame\
              </Typography>
              <div
                className={`${styles.designBarPurpleLarge} designBarPurpleLarge`}
              ></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Approaches;
