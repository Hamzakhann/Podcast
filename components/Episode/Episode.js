import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MusicButton } from "../Button/Button";
import styles from "./Episode.module.scss";

const Episode = () => {
  return (
    <div className={styles.episode_container}>
      <div className={styles.episode_img_container}>
        <Image
          src="/images/episode_img.png"
          layout="responsive"
          width={"100%"}
          height={"62%"}
          objectFit="contain"
          alt="episode image"
        />
        <div className={styles.episode_pod_container}>
          <Image
            src="/images/episode_pod.png"
            width={40}
            height={40}
            objectFit="contain"
            alt="pod mic picture"
          />
        </div>
      </div>
      <div className={styles.episode_content_container}>
        <Typography variant="h3">
          Ep 1: How to build a world-class business brand
        </Typography>
        <Typography variant="body1">
          Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
        </Typography>
        <div className={styles.btn_container}>
          <MusicButton>Listen Now</MusicButton>
        </div>
      </div>
    </div>
  );
};

export default Episode;
