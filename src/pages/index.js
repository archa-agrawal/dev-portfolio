import * as React from "react";

import Hero from "components/routes/Hero";
import Intro from "components/routes/Intro";
import Projects from "components/routes/Projects";
import Contact from "components/routes/Contact";

import Layout from "components/shared/Layout";

import "./index.scss";
import "magic.css/dist/magic.min.css";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Archana Agrawal</title>;
