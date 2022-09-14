import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PrimaryButton, RadiButton } from "../../Button/Button";
import styles from "./OurSponsors.module.scss";

const OurSponsors = () => {
  return (
    <div className={styles.our_sponsors_container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <div className={`${styles.sponsors_card_container} darkWhiteColor`}>
            <Image
              src="/images/sponser_black_1.png"
              width={161}
              height={29}
              objectFit="contain"
              alt="our sponsors pictures"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className={`${styles.sponsors_card_container} darkWhiteColor`}>
            <Image
              src="/images/sponser_black_2.png"
              width={161}
              height={29}
              objectFit="contain"
              alt="our sponsors pictures"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className={`${styles.sponsors_card_container} darkWhiteColor`}>
            <Image
              src="/images/sponser_black_3.png"
              width={161}
              height={29}
              objectFit="contain"
              alt="our sponsors pictures"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className={`${styles.sponsors_card_container} darkWhiteColor`}>
            <Image
              src="/images/sponser_black_4.png"
              width={161}
              height={29}
              objectFit="contain"
              alt="our sponsors pictures"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className={`${styles.sponsors_card_container} darkWhiteColor`}>
            <Image
              src="/images/sponser_black_5.png"
              width={161}
              height={29}
              objectFit="contain"
              alt="our sponsors pictures"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className={`${styles.become_card_container} darkWhiteColor`}>
            <Typography variant="h3">Become a Sponsor</Typography>
            <div className={styles.btn_container}>
              <PrimaryButton>Contact Now</PrimaryButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurSponsors;
