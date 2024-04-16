import PropTypes from 'prop-types';

import EstateSingleCard from "../EstateSingleCard/EstateSingleCard";

const EstateSection = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold">Estates Section</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12 gap-6 lg:my-12 my-8 mx-auto">
        {data.map((Data) => (
          <EstateSingleCard key={Data.id} Data={Data}></EstateSingleCard>
        ))}
      </div>
    </div>
  );
};

export default EstateSection;

EstateSection.propTypes = {
  data: PropTypes.array
};
