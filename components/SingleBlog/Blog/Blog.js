import { Avatar, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.blog_header_container}>
      <div className={styles.blog_heading_container}>
        <span>12 SEP 2021</span>
        <Typography variant="h2">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars.
        </Typography>
      </div>
      <div className={styles.blog_heading_img_container}>
        <Image
          src="/images/blog_head_1.png"
          layout="responsive"
          width={"100%"}
          height={"46%"}
          objectFit="contain"
          alt="blog header picture"
        />
      </div>
      <div className={styles.maker_content_container}>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <Typography variant="h2">
              A podcast for makers and entrepreneurs
            </Typography>
            <Typography variant="body1">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </Typography>
            <Typography variant="body1">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </Typography>
          </div>
          <div className={styles.content}>
            <Typography variant="h2">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black
            </Typography>
            <Typography variant="body1">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </Typography>
            <Typography variant="body1">
              we both celebrate and challenge
            </Typography>
            <Typography variant="body1">
              the culture around us as we orient our lives around Jesuse
            </Typography>
            <Typography variant="body1">
              we want to help you take that next step
            </Typography>
            <Typography variant="body1">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </Typography>
          </div>
          <div className={styles.auther_content_container}>
            <div className={styles.auther_detail}>
              <Avatar alt="" src="" />
              <Typography variant="h3">Eve Madien</Typography>
              <Typography variant="body1">Producer & Art Director</Typography>
              <div className={styles.image_container}>
                <Image
                  src="/images/facebook.png"
                  width={8}
                  height={16}
                  objectFit="contain"
                  alt="facebook logo"
                />
                <Image
                  src="/images/linkedin.png"
                  width={8}
                  height={16}
                  objectFit="contain"
                  alt="linkedin logo"
                />
                <Image
                  src="/images/instagram.png"
                  width={8}
                  height={16}
                  objectFit="contain"
                  alt="instagram logo"
                />
              </div>
            </div>
            <div className={styles.auther_content}>
              <Typography variant="body1">
                Recusandae ea placeat sit rerum quidem enim sed. Voluptas aut
                adipisci autem in sint. Doloremque omnis dolor fuga consectetur
                commodi repellendus molestiae voluptatibus dolorum. Non quae est
                velit.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
