import React from "react";
import styles from "./BlogHeroHeader.module.scss";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { SecondaryButton } from "../../Button/Button";

const BlogHeroHeader = () => {
  return (
    <div className={styles.blog_hero_header_container}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={styles.blog_content_container}>
            <span>FEATURED</span>
            <Typography variant="h2">
              Should I raise money for my startup, or not?
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Typography>
            <div className={styles.btn_container}>
              <SecondaryButton>Read Now {"->"}</SecondaryButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.blog_img_container}>
            <Image
              src="/images/blog_hero_1.png"
              width={616}
              height={448}
              objectFit="contain"
              alt="blog hero"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogHeroHeader;
