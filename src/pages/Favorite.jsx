import { useSelector } from 'react-redux';
import FavoriteBlock from '../components/FavoriteBlock';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const favorite = useSelector((state) => state.favorite.data);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Your Favorite Quotes</h1>
      <div>
        <Link to="/">Back to main page</Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        favorite.length > 0 ?
        <div>
            {favorite.map((item) => (
          <FavoriteBlock key={item.id} item={item} />
        ))}
        </div>
        :
        <p>You don't seem to have any favorite quotes :(</p>
      }
      </div>
    </div>
  );
};

export default Favorite;
