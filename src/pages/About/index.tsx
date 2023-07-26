import { memo } from "react";

type AboutType = {};

export const About = memo(({}: AboutType) => {
  return <h2>About</h2>;
});

export default About;
