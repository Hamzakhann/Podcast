import React from "react";
import Approaches from "../../components/Approaches/Approaches";
import BigDream from "../../components/BigDream/BigDream";
import HostHeroHeader from "../../components/HeroHeaders/HostHeroHeader/HostHeroHeader";
import MultiSocial from "../../components/MultiSocial/MultiSocial";
import OwnStoryHero from "../../components/OwnStoryHero/OwnStoryHero";
import PodCast from "../../components/PodCast/PodCast";
import RecentEpisodes from "../../components/RecentEpisodes/RecentEpisodes";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import styles from "../../styles/host.module.scss";

const Host = () => {
  return (
    <div className={styles.host_container}>
      <BasicLayout>
        <HostHeroHeader />
        <PodCast />
        <BigDream />
        <Approaches />
        <MultiSocial />
        <OwnStoryHero />
        <RecentEpisodes />
      </BasicLayout>
    </div>
  );
};

export default Host;
