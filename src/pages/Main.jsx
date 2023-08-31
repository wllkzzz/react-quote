import { useDispatch, useSelector } from "react-redux";
import { fetchQuote, setLang } from "../store/quotes/quoteSlice";
import { useEffect } from "react";
import { addToFavorite } from "../store/favorites/favoriteSlice";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";


const Main = () => {

    const dispatch = useDispatch();

    const quote = useSelector((state) => state.quote.quotes);
    const lang = useSelector((state) => state.quote.lang);
    const status = useSelector((state) => state.quote.status)
  
    useEffect(() => {
      const fetchData = async () => {
        dispatch(fetchQuote(lang));
      };
  
      fetchData();
    }, [dispatch, lang]);


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto p-4 bg-white shadow rounded-lg">
      {
        status === 'loading' ? 
        <div>
          <Skeleton height={50} width={300}/>
          <Skeleton height={30} width={100}/>
        </div>
        
        :
        <div>
            <h1 className="text-2xl font-semibold mb-2">{quote.content}</h1>
        <h1 className="text-lg mb-4">
          {quote.originator && quote.originator.name}
        </h1>
        </div>
      }
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => dispatch(addToFavorite(quote))}
        >
          Add to Favorites
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded ml-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => dispatch(fetchQuote(lang))}
        >
          Get Another
        </button>
        <div className="flex flex-col items-center mt-4">
          <label className="font-semibold">Language:</label>
          <div className="flex space-x-2 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="language"
                value="en"
                defaultChecked
                onChange={(e) => dispatch(setLang(e.target.value))}
                className="mr-1"
              />
              <span className="text-sm">English</span>
                </label>
                <label className="flex items-center">
                <input
                    type="radio"
                    name="language"
                    value="pl"
                    onChange={(e) => dispatch(setLang(e.target.value))}
                    className="mr-1"
                />
                <span className="text-sm">Polski</span>
                </label>
                <label className="flex items-center">
                <input
                    type="radio"
                    name="language"
                    value="ru"
                    onChange={(e) => dispatch(setLang(e.target.value))}
                    className="mr-1"
                />
                <span className="text-sm">Русский</span>
                </label>
                <label className="flex items-center">
              <input
                type="radio"
                name="language"
                value="fr"
                onChange={(e) => dispatch(setLang(e.target.value))}
                className="mr-1"
              />
              <span className="text-sm">Français</span>
            </label>
          </div>
        </div>
        
        <div >
          <Link to="/favorite" className="text-center block p-5">See your favorite quotes</Link>
        </div>
      </div>


    </div>

   
  )
}

export default Main