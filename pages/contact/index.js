import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Form from "../../components/Contact/Form/Form";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import styles from "../../styles/contact.module.scss";

const Contact = () => {
  return (
    <BasicLayout footer={false}>
      <div className={styles.contact_container}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={12} lg={6}>
            <Form />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.subscribe_container}>
              <div className={styles.subscribe}>
                <Typography variant="h4">Subscribe</Typography>
                <div className={styles.images_container}>
                  <div>
                    <div>
                      <Image
                        src="/images/apple_podcast.png"
                        width={182}
                        height={32}
                        objectFit="contain"
                        alt="apple podcast"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/sound_podcast.png"
                        width={140}
                        height={32}
                        objectFit="contain"
                        alt="apple podcast"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <Image
                        src="/images/google_podcast.png"
                        width={180}
                        height={32}
                        objectFit="contain"
                        alt="apple podcast"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/shopify.png"
                        width={127}
                        height={32}
                        objectFit="contain"
                        alt="apple podcast"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.socials_container}>
                <Typography variant="h4">Social</Typography>
                <div className={styles.social_image_container}>
                  <Image
                    src="/images/facebook_small.png"
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="facebook"
                  />
                  <Image
                    src="/images/linkedin_small.png"
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="facebook"
                  />
                  <Image
                    src="/images/twitter_small.png"
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={styles.line_container}>
          <Image
            src="/images/Lines.png"
            width={279}
            height={320}
            objectFit="contain"
            alt="lines"
          />
        </div>
      </div>
    </BasicLayout>
  );
};

export default Contact;
