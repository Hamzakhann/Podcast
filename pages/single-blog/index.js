import React from "react";
import styles from "../../styles/single-blog.module.scss";
import Business from "../../components/SinglePodcast/Business/Business";
import MakerContent from "../../components/SinglePodcast/MakerContent/MakerContent";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import Blog from "../../components/SingleBlog/Blog/Blog";
import Receive from "../components/Receive/Receive";
import Articles from "../components/Articles/Articles";

const SingleBlog = () => {
  return (
    <div className={styles.single_blog_container}>
      <BasicLayout>
        <Blog />
        <Receive />
        <Articles />
      </BasicLayout>
    </div>
  );
};

export default SingleBlog;
