import { Grid, Typography } from "@mui/material";
import React from "react";
import { MusicButton } from "../../Button/Button";
import styles from "./PodCastHeader.module.scss";

const PodCastHeader = () => {
  return (
    <div className={styles.podcast_header_container}>
      <Grid container>
        <Grid item xs={12} md={12} lg={7}>
          <div
            className={`${styles.podcast_container} darkBlueColorWithOpacity`}
          >
            <span>FEATURED</span>
            <Typography variant="h2">
              A UX Case Study on Creating a Studious Environment{" "}
            </Typography>
            <Typography variant="body1">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon
            </Typography>
            <div className={styles.btn_container}>
              <MusicButton>Listen Now</MusicButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PodCastHeader;
