import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={530}
    height={250}
    viewBox="0 0 530 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="15" ry="15" width="200" height="250" />
    <rect x="205" y="0" rx="20" ry="20" width="320" height="111" />
    <rect x="205" y="114" rx="15" ry="15" width="320" height="136" />
  </ContentLoader>
);

export default Skeleton;
