import React from "react";
import styles from "../../styles/about.module.scss";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import AboutHeroHeader from "../../components/HeroHeaders/AboutHeroHeader/AboutHeroHeader";
import MultiSocialVariantTwo from "../../components/MultiSocial/MultiSocialVariantTwo/MultiSocialVariantTwo";
import OurTeam from "../../components/OurTeam/OurTeam";

const About = () => {
  return (
    <div className={styles.about_page_container}>
      <BasicLayout>
        <AboutHeroHeader />
        <MultiSocialVariantTwo />
        <OurTeam />
      </BasicLayout>
    </div>
  );
};

export default About;
