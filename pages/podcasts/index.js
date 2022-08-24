import React from "react";
import PodCastHeader from "../../components/HeroHeaders/PodCastHeader/PodCastHeader";
import OwnStoryHero from "../../components/OwnStoryHero/OwnStoryHero";
import RecentEpisodes from "../../components/RecentEpisodes/RecentEpisodes";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import styles from "../../styles/podcast.module.scss";

const Podcasts = () => {
  return (
    <div className={styles.podcast_container}>
      {/* check commit  */}
      <BasicLayout>
        <PodCastHeader />
        <RecentEpisodes title={"Recent Episodes"} />
        <div className="pt-5"></div>
        <RecentEpisodes title={"All Podcasts"} showTabs={true} />
        <div className="pt-5"></div>
        <OwnStoryHero
          sx={{
            backgroundImage: "url(/images/own_hero_2.png)",
          }}
        />
      </BasicLayout>
    </div>
  );
};

export default Podcasts;
