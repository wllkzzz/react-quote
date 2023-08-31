import { useDispatch } from "react-redux";
import { deleteFromFavorite } from "../store/favorites/favoriteSlice";

const FavoriteBlock = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col items-start gap-2">
      <p className="text-gray-800">{item.content}</p>
      {item.originator && (
        <p className="text-gray-600">{item.originator.name}</p>
      )}
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(deleteFromFavorite(item))}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FavoriteBlock;
