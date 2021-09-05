import logo from './logo.svg';
import './App.css';
import News from "./components/News"
import { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const url = "https://api.first.org/data/v1/news"
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch(url).
    then(res => res.json()).
    then(d =>  setstate(v => [...v, ...d.data])).
    catch(error => console.error(error));
  },[])

  return (
    <CssBaseline>
    <News news={state} />  
    </CssBaseline> 
  );
}

export default App;
