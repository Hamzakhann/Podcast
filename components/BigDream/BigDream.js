import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./BigDream.module.scss";

const BigDream = () => {
  return (
    <div className={styles.big_dream_container}>
      <Grid container>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.big_dream_content}>
            <Typography variant="h2">
              A small story about a big dream —
            </Typography>
            <Typography variant="body1">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon
            </Typography>
            <Typography variant="body1">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and
            </Typography>
            <div
              className={`${styles.design_bar_purple} designBarPurpleLarge`}
            ></div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.big_dream_img_container}>
            <Image
              src="/images/dream.png"
              layout="fill"
              //   width={630}
              //   height={615}
              objectFit="cover"
              alt="dream person image"
            />
            <div className={`${styles.wave_container}`}>
              <div className={`${styles.wave} darkBlueColor`}>
                <Image
                  src="/images/wave.png"
                  width={320}
                  height={92}
                  objectFit="contain"
                  alt="wave"
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BigDream;
