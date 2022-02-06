import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null)
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=7722523e02db4af4be6507a07504e761')
      setData(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>Get data</button>
      </div>
      { data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly/> }
    </div>
  );
}

export default App;
