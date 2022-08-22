import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <Image
          src="/images/logo.png"
          width={141}
          height={40}
          objectFit="contain"
          alt="navbar logo"
        />
      </div>
      <div className={styles.navbar_links}>
        <div className={styles.links}>
          <Typography variant="body1">Podcasts</Typography>
          <Typography variant="body1">Host</Typography>
          <Typography variant="body1">About</Typography>
          <Typography variant="body1">Blog</Typography>
          <Typography variant="body1">Contact</Typography>
        </div>
        <div className={styles.social}>
          <Image
            src="/images/facebook.png"
            width={12}
            height={25}
            objectFit="contain"
            alt="facebook logo"
          />
          <Image
            src="/images/linkedin.png"
            width={20}
            height={25}
            objectFit="contain"
            alt="linkedin logo"
          />
          <Image
            src="/images/instagram.png"
            width={20}
            height={25}
            objectFit="contain"
            alt="instagram logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
