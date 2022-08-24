import Image from "next/image";
import React from "react";
import styles from "./Listener.module.scss";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

const Listener = () => {
  return (
    <div className={styles.listener_container}>
      <div className={styles.listener_head}>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="/images/listener.jpg"
            sx={{ width: 80, height: 80 }}
          />
        </div>
        <div className={styles.listener_details}>
          <Typography variant="body1">Eve Madien</Typography>
          <Rating name="read-only" value={5} readOnly />
        </div>
      </div>
      <div className={styles.listener_content_container}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
          condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi
          augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer
          viverra sed. Penatibus tortor consequat.
        </Typography>
      </div>
    </div>
  );
};

export default Listener;
