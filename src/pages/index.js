import * as React from "react";
import { Hero, Intro, Projects } from "@components/routes";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Projects />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
