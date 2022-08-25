import React from "react";
import BlogHeroHeader from "../../components/HeroHeaders/BlogHeroHeader/BlogHeroHeader";
import styles from "../../styles/blog.module.scss";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import RecentEpisodes from "../../components/RecentEpisodes/RecentEpisodes";
import AllBlogs from "../../components/Blogs/AllBlogs/AllBlogs";

const Blog = () => {
  return (
    <div className={styles.blog_container}>
      <BasicLayout>
        <BlogHeroHeader />
        <AllBlogs title={"All Blogs"} />
      </BasicLayout>
    </div>
  );
};

export default Blog;
