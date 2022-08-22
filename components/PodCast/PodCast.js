import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./PodCast.module.scss";

const PodCast = () => {
  return (
    <div className={styles.podcast_container}>
      <div className={styles.available_podcast}>
        <Typography variant="h3">Podcast Available On</Typography>
      </div>
      <div className={styles.podcast}>
        <Image
          src="/images/apple_podcast.png"
          width={185}
          height={36}
          objectFit="contain"
          alt="apple podcast"
        />
      </div>
      <div className={styles.podcast}>
        <Image
          src="/images/sound_podcast.png"
          width={174}
          height={36}
          objectFit="contain"
          alt="sound podcast"
        />
      </div>
      <div className={styles.podcast}>
        <Image
          src="/images/google_podcast.png"
          width={203}
          height={37}
          objectFit="contain"
          alt="google podcast"
        />
      </div>
      <div className={styles.podcast}>
        <Image
          src="/images/shopify.png"
          width={131}
          height={36}
          objectFit="contain"
          alt="spotify podcast"
        />
      </div>
    </div>
  );
};

export default PodCast;
