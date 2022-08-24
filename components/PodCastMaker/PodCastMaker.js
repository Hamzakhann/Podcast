import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./PodCastMaker.module.scss";

const PodCastMaker = () => {
  return (
    <div className={styles.pod_cast_container}>
      <div className={styles.podcast_1}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.podcast_content_container}>
              <Typography variant="h2">
                A podcast for makers and entrepreneurs
              </Typography>
              <Typography variant="body1">
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={`${styles.podcast_img_container} darkBlueColor`}>
              <Image
                src="/images/podcastmaker.png"
                width={461}
                height={384}
                objectFit="contain"
                alt="podcastmaker image"
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.podcast_2}>
        <Grid container spacing={5} className={styles.podcast_2_grid_container}>
          <Grid item xs={12} md={12} lg={6}>
            <div className={`${styles.podcast_img_container} darkBlueColor`}>
              <Image
                src="/images/podcast_men.png"
                layout="fill"
                objectFit="cover"
                alt="podcastmaker image"
              />
              <div
                className={`${styles.podcast_video_container} darkBlueColor`}
              >
                <div className={styles.icon}>
                  <Image
                    src="/images/youtube_icon.png"
                    width={48}
                    height={38}
                    objectFit="contain"
                    alt="youtube icon"
                  />
                </div>
                <Typography variant="h2">350+ Videos</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.podcast_content_container}>
              <Typography variant="h2">
                My origins on{" "}
                <span className={styles.podcast_h2_span}>YouTube</span> in 2008
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
                cras lacus tellus morbi viverra suspendisse ornare. Sit
                volutpat, volutpat ut netus malesuada enim penatibus non
                aliquet.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PodCastMaker;
