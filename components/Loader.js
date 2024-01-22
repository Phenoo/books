import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={800}
    viewBox="0 0 400 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#1BC354"
    {...props}
  >
    <Rect x="25" y="15" rx="5" ry="5" width="300" height="100" />
    <Rect x="25" y="45" rx="5" ry="5" width="300" height="100" />
    <Rect x="25" y="15" rx="5" ry="5" width="300" height="100" />
    <Rect x="25" y="45" rx="5" ry="5" width="300" height="100" />
    <Rect x="25" y="15" rx="5" ry="5" width="300" height="100" />
    <Rect x="25" y="45" rx="5" ry="5" width="300" height="100" />
    <Rect x="25" y="75" rx="5" ry="5" width="300" height="100" />
    <Rect x="25" y="75" rx="5" ry="5" width="300" height="100" />
    <Rect x="25" y="75" rx="5" ry="5" width="300" height="200" />
  </ContentLoader>
);

export default MyLoader;
