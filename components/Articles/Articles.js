import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { Fragment } from "react";
import Episode from "../Episode/Episode";
import styles from "./Articles.module.scss";
import ArticlesCard from "./ArticlesCard/ArticlesCard";

const Articles = () => {
  const data = [
    {
      title: "Getting the first 100 customers for your business",
      decription:
        "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
      image: "/images/articles_2.jpg",
    },
    {
      title: "Apparently we had reached a great height in the atmosphere, ...",
      decription:
        "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
      image: "/images/articles_1.jpg",
    },
  ];

  return (
    <div className={styles.articles_container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <div className={`${styles.read_article_container} darkWhiteColor`}>
            <Typography variant="h2">React our articles {"&"} news</Typography>
            <Link href="#">See More</Link>
            <div className={styles.article_strips_container}>
              <div className={`${styles.strips1} darkBlueColor`}></div>
              <div className={`${styles.strips2} primaryColor`}></div>
              <div className={`${styles.strips3} darkBlueColor`}></div>
            </div>
          </div>
        </Grid>
        {data?.map((item, i) => (
          <Fragment key={i}>
            <Grid item xs={12} md={6} lg={4}>
              <ArticlesCard
                title={item?.title}
                description={item?.decription}
                image={item?.image}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Articles;
