import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import styles from "./MeetOurTeam.module.scss";

const MeetOurTeam = () => {
  const teamMockArr = [
    {
      name: "Jerome Bell",
      status: "Founder & Bell",
      image: "/images/meet_team1.png",
    },
    {
      name: "Robert Mill",
      status: "Cofounder",
      image: "/images/meet_team2.png",
    },
    {
      name: "Rehab Walls",
      status: "Producer",
      image: "/images/meet_team3.png",
    },
    {
      name: "Steve Winston",
      status: "Editor",
      image: "/images/meet_team4.png",
    },
  ];
  return (
    <div className={styles.meet_our_team_container}>
      <Typography variant="h2">Meet Our Team</Typography>
      <Grid container spacing={3}>
        {teamMockArr?.map((item, i) => (
          <Fragment key={i}>
            <Grid item xs={12} md={6} lg={3}>
              <div className={styles.team_card_container}>
                <div className={styles.team_img_container}>
                  <Image
                    src={item?.image}
                    layout="responsive"
                    width={"100%"}
                    height={"100%"}
                    alt="team card image"
                  />
                </div>
                <Typography variant="h2">{item?.name}</Typography>
                <small>{item?.status}</small>
                <div className={styles.social_img_container}>
                  <Image
                    src="/images/facebook_small.png"
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="facebook icon"
                  />
                  <Image
                    src="/images/twitter_small.png"
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="twitter icon"
                  />
                  <Image
                    src="/images/linkedin_small.png"
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="linkedin icon"
                  />
                </div>
              </div>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default MeetOurTeam;
