import logo from './logo.svg';
import './App.css';
import {useCallback, useRef, useState} from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

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
  );
}

export default App;
