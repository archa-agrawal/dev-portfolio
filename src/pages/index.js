import * as React from "react";
import { Hero, Intro, Projects, Contact } from "components/routes";
import { Layout } from "components/shared";

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

export const Head = () => <title>Home Page</title>;
