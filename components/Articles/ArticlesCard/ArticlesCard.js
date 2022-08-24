import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MusicButton } from "../../Button/Button";
import styles from "./ArticlesCard.module.scss";

const ArticlesCard = ({ title, description, image }) => {
  return (
    <div className={styles.episode_container}>
      <div className={styles.episode_img_container}>
        <Image
          src={image}
          layout="responsive"
          width={"100%"}
          height={"62%"}
          objectFit="cover"
          alt="episode image"
        />
      </div>
      <div className={styles.episode_content_container}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <div className={styles.btn_container}>
          <MusicButton isMusic={false}>Read Now</MusicButton>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
