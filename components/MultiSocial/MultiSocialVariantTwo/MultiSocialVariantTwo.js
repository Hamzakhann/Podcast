import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./MultiSocialVariantTwo.module.scss";
import Image from "next/image";

const MultiSocialVariantTwo = () => {
  return (
    <div className={styles.multi_social_container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <div className={styles.social_container}>
            <Image
              src="/images/multi_1.png"
              width={128}
              height={128}
              objectFit="contain"
              alt="multi social card"
            />
            <Typography variant="h4">500+ Podcasts</Typography>
            <Typography variant="body1">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.{" "}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.social_container}>
            <Image
              src="/images/multi_2.png"
              width={128}
              height={128}
              objectFit="contain"
              alt="multi social card"
            />
            <Typography variant="h4">500+ Podcasts</Typography>
            <Typography variant="body1">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.{" "}
            </Typography>
          </div>
        </Grid>{" "}
        <Grid item xs={12} md={4}>
          <div className={styles.social_container}>
            <Image
              src="/images/multi_3.png"
              width={128}
              height={128}
              objectFit="contain"
              alt="multi social card"
            />
            <Typography variant="h4">500+ Podcasts</Typography>
            <Typography variant="body1">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.{" "}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MultiSocialVariantTwo;
