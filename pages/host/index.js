import React from "react";
import Approaches from "../../components/Approaches/Approaches";
import BigDream from "../../components/BigDream/BigDream";
import HostHeroHeader from "../../components/HeroHeaders/HostHeroHeader/HostHeroHeader";
import MultiSocial from "../../components/MultiSocial/MultiSocialVariantOne/MultiSocialVariantOne";
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
        <OwnStoryHero
          sx={{
            backgroundImage: "url(/images/own_hero_1.png)",
          }}
        />
        <RecentEpisodes />
      </BasicLayout>
    </div>
  );
};

export default Host;
