import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import SearchPanel from "./components/SearchPanel";
import Results from "./components/Results";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";

const App = () => {


  const [query, setQuery] = useState(`*[_type == "hoarding"]`)

  const [status, setStatus] = useState('');

  const [hoardings, setHoardings] = useState()
  


  useEffect(() => {
    fetchHoardings()
  },[query])

  async function fetchHoardings(){

    setStatus('loading')

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

    setStatus('loaded')


  }

  function searchHoardings(formData){

    const locationId = formData.locationId;
    const locationName = formData.locationName;
    const city = formData.city;
    const route = formData.route;

    {/*TODO: Have to add locationId to the query after adding that location Id field in the CMS */}
    setQuery(`*[location == "${locationName}" || city == "${city}" || route == "${route}"]`)
  }

  return (
    <BrowserRouter >
      <header className="   text-green-700 text-center p-3 ">
        <button className=" border-green-700 font-bold text-xl border-2  py-2 px-3 rounded-sm mx-auto"><Link to="/">HOARDING FINDER</Link></button>
      </header>
      <Routes>
        <Route path="/" element={[< SearchPanel key={'el1'}  searchHoardings={searchHoardings}  />, <Results key={'el2'} status={status} hoardings={hoardings} />]}>   </Route>
        <Route path="details/:id" element={<Details />}></Route>
      
        
      </Routes>
    </BrowserRouter>
  );
};

////////////////////////// ATTENTION ////////////////////////////

//THIS IS THE WAY IT HAD BEFORE, THERE IS A ERROR WHEN RERENDER 
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />)


//THEREFORE USED THIS CODE TO SOLVE THAT ERROR: BUT I DON'T KNOW WHAT THIS ACTUALLY DOES
let container = null;

document.addEventListener('DOMContentLoaded', function(event) {
  if (!container) {
    container = document.getElementById('root') 
    const root = createRoot(container)
    root.render(<App />)
  }
});

