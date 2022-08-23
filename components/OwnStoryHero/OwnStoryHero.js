import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { SecondaryButton } from "../Button/Button";
import styles from "./OwnStoryHero.module.scss";

const OwnStoryHero = ({ sx }) => {
  console.log(sx);
  return (
    <div className={styles.own_story_hero_container} style={sx}>
      <div className={styles.overlay}></div>
      <div className={styles.own_story_hero_content_container}>
        <Typography variant="h1">Become The Hero Of Your Own Story</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
          lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat
          ut netus malesuada enim penatibus non aliquet.
        </Typography>
        <div className={styles.btn_container}>
          <SecondaryButton>Contact us</SecondaryButton>
        </div>
      </div>
      <div className={`${styles.wave_container} darkBlueColor`}>
        <Image
          src="/images/radio_wave.svg"
          width={507}
          height={114}
          objectFit="contain"
          alt="radio wave icon"
        />
      </div>
    </div>
  );
};

export default OwnStoryHero;
