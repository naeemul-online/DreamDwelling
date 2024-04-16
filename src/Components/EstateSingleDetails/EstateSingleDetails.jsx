// import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EstateSingleDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
//   console.log(details) 

//   useEffect(() => {
//     fetch('/data.json')
//       .then(res => res.json())
//       .then(data => {
//         setDetails(data);
//       })
//       .catch(error => console.log("Error fetching data", error));
//   }, []);

  // Ensure data is available before accessing its properties
  const Data = data ? data.find(item => item.id == id) : null;

  console.log(Data);
  

  return (
    <div>
      <h2>
        This is card details page id: <span>{Data ? Data.estate_title : ''}</span>
      </h2>
    </div>
  );
};

export default EstateSingleDetails;
