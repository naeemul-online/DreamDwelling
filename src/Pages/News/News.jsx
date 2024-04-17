import { useLoaderData } from "react-router-dom";
import Anews from "./Anews";


const News = () => {
    const data = useLoaderData(); console.log(data)
    return (
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-4 my-8 mx-auto">
            {
                data.map(aData => <Anews key={aData.id} article ={aData}></Anews> )
            }
        </div>
        </div>
    );
};

export default News;