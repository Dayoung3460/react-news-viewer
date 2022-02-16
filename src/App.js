import logo from './logo.svg';
import './App.css';
import {useCallback, useRef, useState} from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import NewsPage from "./components/pages/NewsPage";
import {Route, Routes} from "react-router-dom";

function App() {
  const [category, setCategory] = useState('All')
  const onSelect = useCallback(category => {
    setCategory(category)
  }, [])

  return (
    <div>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </div>
    )

    // return (
    //   <Routes>
    //   <Route path="/:category?" element={<NewsPage/>} />
    //     </Routes>
    //   )


}

export default App;
