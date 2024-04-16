
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EstateSingleCard = ({ Data }) => {
  // console.log(Data)
  const { Image, estate_title, description, price, Area, location, facilities, id } = Data;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={Image} alt={estate_title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{estate_title}</div>
        {
           description.length > 200 ? <p className="text-gray-700 text-base"> {description.slice(0, 200)}... </p> : ''
        }
        
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{price}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{Area}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{location}</span>
      </div>
      <div className="px-6 py-4">
        {facilities.map((facility, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{facility}</span>
        ))}
      </div>
      <div className="px-6 py-4">
        <Link to={`estate-single-details/${id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button></Link>
      </div>
    </div>
  );
};

EstateSingleCard.propTypes = {
  Data: PropTypes.object
};

export default EstateSingleCard;
