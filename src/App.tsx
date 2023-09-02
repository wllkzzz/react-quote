import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Favorite from "./pages/Favorite";
import ErrorPage from "./pages/ErrorPage";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="" element={<Main/>}/>
      <Route path="/favorite" element={<Favorite/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
