import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./HeroHeader.module.scss";
import TextField from "@mui/material/TextField";
import { PrimaryButton } from "../../Button/Button";
import Image from "next/image";

const HeroHeader = () => {
  return (
    <div className={`${styles.heroheader_container} header_header_container`}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={styles.hero_content_container}>
            <Typography variant="h1">
              Become The Hero Of Your Own Story
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </Typography>
            <div className={styles.search_email_container}>
              <TextField
                id="outlined-basic"
                label="Enter Your Email Id"
                variant="outlined"
                size="small"
                fullWidth
              />
              <PrimaryButton>Subscribe</PrimaryButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.hero_img_container}>
            <Image
              src="/images/hero_header.png"
              width={432}
              height={256}
              objectFit="contain"
              alt="hero header image"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroHeader;
