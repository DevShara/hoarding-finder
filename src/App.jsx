import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import SearchPanel from "./components/searchPanel";
import Results from "./components/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [location, setLocation] = useState('Mawathagama')
  const [city, setCity] = useState('Mawathagama');
  const [route, setRoute] = useState('Kandy Kurunegala Rd');

  const [hoardings, setHoardings] = useState([]) 

  useEffect(() => {
    fetchHoardings()
  },[])

  async function fetchHoardings(){
    let PROJECT_ID = "11j4bpx0";
    let DATASET = "production";
    let QUERY = encodeURIComponent('*[_type == "hoarding"]');

    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    const apiRes = await fetch(URL);
    const res = await apiRes.json();

    console.log(res.result)
    setHoardings(res.result);
  }

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={[< SearchPanel key={'el1'} />, <Results key={'el2'} hoardings={hoardings} />]}>   </Route>

      
        
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
