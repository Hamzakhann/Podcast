import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./MultiSocialVariantOne.module.scss";

const MultiSocial = () => {
  return (
    <div className={styles.multiSocial_container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <div className={`${styles.multi_social}  darkBlueColor`}>
            <div className={styles.img_container}>
              <Image
                src="/images/multi_1.png"
                width={128}
                height={128}
                objectFit="contain"
                alt="multi social card"
              />
            </div>
            <div className={styles.content_container}>
              <Typography variant="h1">500+</Typography>
              <Typography variant="h2">Podcasts</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div
            className={`${styles.multi_social} ${styles.top_till} darkBlueColor`}
          >
            <div className={styles.img_container}>
              <Image
                src="/images/multi_2.png"
                width={128}
                height={128}
                objectFit="contain"
                alt="multi social card"
              />
            </div>
            <div className={styles.content_container}>
              <Typography variant="h1">500+</Typography>
              <Typography variant="h2">Podcasts</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className={`${styles.multi_social} darkBlueColor`}>
            <div className={styles.img_container}>
              <Image
                src="/images/multi_3.png"
                width={128}
                height={128}
                objectFit="contain"
                alt="multi social card"
              />
            </div>
            <div className={styles.content_container}>
              <Typography variant="h1">500+</Typography>
              <Typography variant="h2">Podcasts</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div
            className={`${styles.multi_social} ${styles.top_till} darkBlueColor`}
          >
            <div className={styles.img_container}>
              <Image
                src="/images/multi_4.png"
                width={128}
                height={128}
                objectFit="contain"
                alt="multi social card"
              />
            </div>
            <div className={styles.content_container}>
              <Typography variant="h1">500+</Typography>
              <Typography variant="h2">Podcasts</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MultiSocial;
