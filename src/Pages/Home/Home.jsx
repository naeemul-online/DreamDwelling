import { useLoaderData } from "react-router-dom";
import EstateSection from "../../Components/EstateSection/EstateSection";
import Slider from "../../Components/Slider/Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
   
    <div>
       <Helmet>
        <title>Home-DreamDwellings</title>
      </Helmet>
      <Slider></Slider>
      <div className="container mx-auto">
        <EstateSection key={data.id} data={data}></EstateSection>
      </div>
    </div>
  );
};

export default Home;
