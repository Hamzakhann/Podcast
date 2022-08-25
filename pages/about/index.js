import React from "react";
import styles from "../../styles/about.module.scss";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import AboutHeroHeader from "../../components/HeroHeaders/AboutHeroHeader/AboutHeroHeader";
import MultiSocialVariantTwo from "../../components/MultiSocial/MultiSocialVariantTwo/MultiSocialVariantTwo";
import OurTeam from "../../components/Team/OurTeam/OurTeam";
import MeetOurTeam from "../../components/Team/MeetOurTeam/MeetOurTeam";
import OurSponsors from "../../components/Team/OurSponsors/OurSponsors";
import RecentEpisodes from "../../components/RecentEpisodes/RecentEpisodes";

const About = () => {
  return (
    <div className={styles.about_page_container}>
      <BasicLayout>
        <AboutHeroHeader />
        <MultiSocialVariantTwo />
        <OurTeam />
        <MeetOurTeam />
        <OurSponsors />
        <RecentEpisodes title={"Recent Episodes"} />
      </BasicLayout>
    </div>
  );
};

export default About;
