import { useDispatch } from "react-redux";
import { deleteFromFavorite } from "../store/favorites/favoriteSlice";
import React from 'react';

interface FavoriteBlockProps {
  item: {
    id: number;
    content: string;
    originator?: {
      name: string;
    }
  }
}

const FavoriteBlock: React.FC<FavoriteBlockProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col items-start gap-2">
      <p className="text-gray-800">{item.content}</p>
      {item.originator && (
        <p className="text-gray-600">{item.originator.name}</p>
      )}
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(deleteFromFavorite(item.id))}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FavoriteBlock;

