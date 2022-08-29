import { Grid, Typography, IconButton } from "@mui/material";
import React, { Fragment, useRef } from "react";
import styles from "./OurListeners.module.scss";
import Image from "next/image";
import Listener from "../Listener/Listener";
import Carousel from "react-elastic-carousel";

const OurListeners = () => {
  let carouselRef = useRef();
  const next = () => {
    carouselRef.current?.onNextStart();
  };
  const previous = () => {
    carouselRef.current?.onPrevStart();
  };

  return (
    <div className={styles.our_listeners_container}>
      <div className={styles.our_listeners_heading}>
        <div className={styles.content}>
          <Typography variant="h2">What our listeners say</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
            lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
            volutpat ut netus malesuada enim penatibus non aliquet.
          </Typography>
        </div>
        <div className={styles.img_container}>
          <div className={`${styles.arrow} darkBlueColor`} onClick={previous}>
            <IconButton>
              <Image
                src="/images/left_arrow.png"
                width={22}
                height={12}
                objectFit="contain"
                alt="arrow"
              />
            </IconButton>
          </div>
          <div className={`${styles.arrow} darkBlueColor`} onClick={next}>
            <IconButton>
              <Image
                src="/images/right_arrow.png"
                width={22}
                height={12}
                objectFit="contain"
                alt="arrow"
              />
            </IconButton>
          </div>
        </div>
      </div>
      <Carousel ref={carouselRef} showArrows={false} pagination={false}>
        {Array(4)
          .fill()
          .map((item, i) => (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Listener />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <Listener />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <Listener />
              </Grid>
            </Grid>
          ))}
      </Carousel>
    </div>
  );
};

export default OurListeners;
