import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./AboutHeroHeader.module.scss";
import { PrimaryButton } from "../../Button/Button";
import Image from "next/image";

const AboutHeroHeader = () => {
  return (
    <div className={styles.about_heroheader_container}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={styles.about_hero_content_container}>
            <Typography variant="h1">About Finsweet Podcast</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Typography>
            <div className={styles.btn_container}>
              <PrimaryButton>Subscribe Now!</PrimaryButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.about_hero_img_container}>
            <Image
              src="/images/about_hero.png"
              width={480}
              height={480}
              objectFit="contain"
              alt="about hero header picture"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutHeroHeader;
