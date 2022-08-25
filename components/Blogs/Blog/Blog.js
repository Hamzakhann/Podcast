import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MusicButtonCustom } from "../../Button/Button";
import { MusicButton } from "../../Button/Button";
import styles from "./Blog.module.scss";

const Blog = () => {
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
      </div>
      <div className={styles.episode_content_container}>
        <Typography variant="h3">
          Ep 1: How to build a world-class business brand
        </Typography>
        <Typography variant="body1">
          Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
        </Typography>
        <div className={styles.btn_container}>
          <MusicButtonCustom>Listen Now</MusicButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default Blog;
