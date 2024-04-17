
import PropTypes from 'prop-types';
const Anews = ({article }) => {
    console.log(article )
    return (
        <div className="rounded overflow-hidden shadow-lg m-4 ">
        <img className="w-full" src={article.image} alt="Article" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{article.title}</div>
          <p className="text-gray-700 text-base">
            {article.content}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#RealEstate</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Investment</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Technology</span>
        </div>
      </div>
    );
};

export default Anews;

Anews.propTypes = {
    article: PropTypes.object
  };