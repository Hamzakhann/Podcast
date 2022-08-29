import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import styles from "../styles/home.module.scss";
import BasicLayout from "../layout/BasicLayout/BasicLayout";
import HeroHeader from "../components/HeroHeaders/HeroHeader/HeroHeader";
import PodCast from "../components/PodCast/PodCast";
import PodCastMaker from "../components/PodCastMaker/PodCastMaker";
import RecentEpisodes from "../components/RecentEpisodes/RecentEpisodes";
import OurListeners from "../components/OurListeners/OurListeners";
import Receive from "../components/Receive/Receive";
import Articles from "../components/Articles/Articles";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <BasicLayout>
        <HeroHeader />
        <PodCast />
        <PodCastMaker />
        <RecentEpisodes title={"Recent Episodes"} />
        <OurListeners />
        <Receive />
        <Articles />
      </BasicLayout>
    </div>
  );
};

export default Home;
