import PropTypes from "prop-types";
const Anews = ({ article }) => {
  // console.log(article )
  return (
    <div
      className="rounded overflow-hidden shadow-lg m-4 flex flex-col justify-between"
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <img className="w-full h-1/3"  src={article.image} alt="Article" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base">{article.content}</p>
        
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #RealEstate
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Investment
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #Technology
        </span>        
      </div>
      <button className="btn">Read News</button>
      
    </div>
  );
};

export default Anews;

Anews.propTypes = {
  article: PropTypes.object,
};
