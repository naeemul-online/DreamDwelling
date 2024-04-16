import { useLoaderData } from "react-router-dom";
import EstateSection from "../../Components/EstateSection/EstateSection";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <div>
      <Slider></Slider>
      <div className="container mx-auto">
        <EstateSection key={data.id} data={data}></EstateSection>
      </div>
    </div>
  );
};

export default Home;
