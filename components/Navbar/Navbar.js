import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  let router = useRouter();

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <Image
          src="/images/logo.png"
          width={141}
          height={40}
          objectFit="contain"
          alt="navbar logo"
          onClick={() => router.push("/")}
        />
      </div>
      <div className={styles.navbar_links}>
        <div className={styles.links}>
          <div onClick={() => router.push("/podcasts")}>
            <Typography variant="body1">Podcasts</Typography>
          </div>
          <div onClick={() => router.push("/host")}>
            <Typography variant="body1">Host</Typography>
          </div>
          <div>
            <Typography variant="body1">About</Typography>
          </div>
          <div>
            <Typography variant="body1">Blog</Typography>
          </div>
          <div>
            <Typography variant="body1">Contact</Typography>
          </div>
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
