import Heading from "../../../Components/Heading";
import HeaderSection from "./HeaderSection/HeaderSection";
import Rockets from "./Rockets";

const Home = () => {
  return (
    <div>
      <Heading />
      <HeaderSection />
      <div className="min-h-[calc(100vh-400px)]">
        <Rockets />
      </div>
      <p className="text-center text-sm text-[#495057] mb-6 mt-20">Created by the brilliant minds behind SpaceX</p>
    </div>
  );
};

export default Home;
