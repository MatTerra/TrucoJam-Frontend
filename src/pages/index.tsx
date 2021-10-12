import React from "react";
import HomePage from "templates/home";

interface IHomePageProps {}

const Home: React.FC<IHomePageProps> = ({}) => {
  return (
    <div style={{ height: "100%" }}>
      <HomePage />
    </div>
  );
};
export default Home;
