import { Grid, Typography } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../../Button/Button";
import styles from "./HostHeroHeader.module.scss";
import Image from "next/image";

const HostHeroHeader = () => {
  return (
    <div className={styles.host_hero_header_container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className={styles.host_hero_header_img_container}>
            <div
              className={`${styles.design_bar_purple} designBarPurple`}
            ></div>
            <div className={`${styles.design_bar_green} designBarGreen`}></div>
            <Image
              src="/images/host.png"
              width={339}
              height={462}
              objectFit="contain"
              alt="host picture"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.host_hero_header_content_container}>
            <span>ABOUT THE HOST</span>
            <Typography variant="h2">
              Hey there, I’m Andrew Jonson and welcome to my Podcast
            </Typography>
            <Typography variant="body1">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </Typography>
            <div className={styles.btn_container}>
              <PrimaryButton>Know More</PrimaryButton>
            </div>
            <div
              className={`${styles.design_bar_green_large} designBarGreenLarge`}
            ></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HostHeroHeader;
