import Heading from "../../../Components/Heading";
import useTitle from "../../../hooks/useTitle";
import HeaderSection from "./HeaderSection/HeaderSection";
import Rockets from "./Rockets";

const Home = () => {

useTitle("Home")

  return (
    <div>
      <Heading />
      <HeaderSection />
      <Rockets />
    </div>
  );
};

export default Home;
