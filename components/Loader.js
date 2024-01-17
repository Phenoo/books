import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Circle cx="10" cy="20" r="8" />
    <Rect x="25" y="15" rx="5" ry="5" width="220" height="100" />
    <Circle cx="10" cy="50" r="8" />
    <Rect x="25" y="45" rx="5" ry="5" width="220" height="100" />
    <Circle cx="10" cy="80" r="8" />
    <Rect x="25" y="75" rx="5" ry="5" width="220" height="100" />
    <Circle cx="10" cy="110" r="8" />
    <Rect x="25" y="105" rx="5" ry="5" width="220" height="100" />
  </ContentLoader>
);

export default MyLoader;
