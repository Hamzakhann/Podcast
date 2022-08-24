import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./OurTeam.module.scss";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className={styles.our_team_container}>
      <Typography variant="h2">A few words about our team</Typography>
      <div className={styles.image_container}>
        <Image
          src="/images/our_team.png"
          layout="fill"
          objectFit="cover"
          alt="our Team picture"
          //   width={1024}
          //   height={320}
        />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className={styles.content_container}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              eget condimentum enim libero ultricies amet odio fringilla. Ut
              nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
              eget in ut integer viverra sed. Penatibus tortor consequat,
              habitasse non nisl.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.content_container}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              eget condimentum enim libero ultricies amet odio fringilla. Ut
              nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
              eget in ut integer viverra sed. Penatibus tortor consequat,
              habitasse non nisl.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurTeam;
