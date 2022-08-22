import { TextField, Typography } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../Button/Button";
import styles from "./Receive.module.scss";
import Image from "next/image";

const Receive = () => {
  return (
    <div
      className={`${styles.receive_container} darkBlueColor receive_container`}
    >
      <div className={styles.receive_pod_mic_container}>
        <Image
          src="/images/receive_pod_mic.png"
          width={114}
          height={119}
          objectFit="contain"
          alt="receive pod mic image"
        />
      </div>
      <div className={styles.receivee_pod_mic_left_container}>
        <Image
          src="/images/receive_pod_mic_left.png"
          width={58}
          height={61}
          objectFit="contain"
          alt="receive pod mic image"
        />
      </div>
      <div className={styles.receive_img_container}>
        <Image
          src="/images/receive.png"
          layout="responsive"
          width={"100%"}
          height={"7%"}
          objectFit="contain"
          alt="receive back image"
        />
      </div>
      <div className={styles.receive_content_container}>
        <Typography variant="h2">
          Receive new episodes in your inbox.
        </Typography>
        <div className={styles.search_container}>
          <div className={styles.search}>
            <TextField
              id="outlined-basic"
              label="Enter Your Email Id"
              variant="filled"
              size="small"
              fullWidth
            />
            <div className={styles.btn_container}>
              <PrimaryButton>Subscribe</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receive;
