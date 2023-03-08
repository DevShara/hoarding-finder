import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import SearchPanel from "./components/searchPanel";
import Results from "./components/Results";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";

const App = () => {

  const [location, setLocation] = useState('Mawathagama')
  const [city, setCity] = useState('Mawathagama');
  const [route, setRoute] = useState('Kandy Kurunegala Rd');

  const [query, setQuery] = useState(`*[_type == "hoarding"]`)

  const [hoardings, setHoardings] = useState()
  
  console.log('hoardings')


  useEffect(() => {
    fetchHoardings()
  },[query])

  async function fetchHoardings(){
    let PROJECT_ID = "11j4bpx0";
    let DATASET = "production";

      // QUERY = encodeURIComponent(`*[location == "Mawathagama" && city == "Mawathagama" && route == "Kandy Kurunegala Rd"]`)

    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent(query)}`;

    const apiRes = await fetch(URL);
    const res = await apiRes.json();

    // setHoardings(() => {
    //   return(null)
    // })
    setHoardings(res.result);

  }

  function searchHoardings(formData){
  
    console.log(formData)

    const city = formData.city;
    const location = formData.location;
    const route = formData.route;

    setQuery(`*[location == "${location}" && city == "${city}" && route == "${route}"]`)
  }

  return (
    <BrowserRouter >
      <header className="   text-green-700 text-center p-3 ">
        <button className=" border-green-700 font-bold text-xl border-2  py-2 px-3 rounded-sm mx-auto"><Link to="/">HOARDING FINDER</Link></button>
      </header>
      <Routes>
        <Route path="/" element={[< SearchPanel key={'el1'}  searchHoardings={searchHoardings}  />, <Results key={'el2'} hoardings={hoardings} />]}>   </Route>
        <Route path="details/:id" element={<Details />}></Route>
      
        
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
