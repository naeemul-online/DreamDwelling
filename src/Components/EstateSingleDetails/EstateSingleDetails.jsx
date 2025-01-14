// import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateSingleDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  // Ensure data is available before accessing its properties
  const Data = data ? data.find((item) => item.id == id) : null;

  const {
    Image,
    estate_title,
    description,
    price,
    Area,
    location,
    facilities,
  } = Data;

  return (
    <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12 lg:py-12 lg:my-10">
      <Helmet>
        <title>Estate - Single Card Details</title>
      </Helmet>
      <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 items-center dark:bg-gray-50">
        <img
          src={Image}
          alt=""
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        />
        <div className="p-6 space-y-2 lg:col-span-5" data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {estate_title}
          </h3>
          <p>{description}</p>
          <div className="px-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mb-2 text-gray-700 mr-2">
              {price}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mb-2 text-gray-700 mr-2">
              {Area}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mb-2 text-gray-700">
              {location}
            </span>
          </div>
          <div className="px-2">
            {facilities.map((facility, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateSingleDetails;
