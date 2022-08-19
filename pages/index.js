import React from "react";
import { Typography } from "@mui/material";
import styles from "../styles/home.module.scss";
import {
  RadiButton,
  MusicButton,
  PrimaryButton,
  SecondaryButton,
  LightRadiButton,
} from "../components/Button/Button";

const Home = () => {
  return (
    <div>
      <Typography variant="h1">HELLO</Typography>
      <Typography variant="h2">HELLO</Typography>
      <Typography variant="h3">HELLO</Typography>
      <Typography variant="h4">HELLO</Typography>
      <Typography variant="h5">HELLO</Typography>
      <Typography variant="h6">HELLO</Typography>
      <Typography variant="body1">Search</Typography>
      <PrimaryButton>Hello</PrimaryButton>
      <SecondaryButton>Hello</SecondaryButton>
      <MusicButton>Hello</MusicButton>
      <RadiButton>Hello</RadiButton>
      <LightRadiButton>Hello</LightRadiButton>
    </div>
  );
};

export default Home;
