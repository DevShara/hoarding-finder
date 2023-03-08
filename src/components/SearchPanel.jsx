import { useEffect, useState } from "react";
import "../styles/index.css";
import useRouteList from "./useRouteList";




const SearchPanel = ({searchHoardings}) => {

    const [cityList, setCityList] = useState([]) 
    const [selCity, setSelCity] = useState('');

    const routes = useRouteList(selCity);
  

    useEffect(() => {
      fetchCityList()
    }, []);

    async function fetchCityList(){
      let PROJECT_ID = "11j4bpx0";
      let DATASET = "production";
    
      let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent("*[_type == 'hoarding']{city}")}`;
  
      const apiRes = await fetch(URL);
      const res = await apiRes.json();
     
      const cities = []

      res.result.forEach(hoarding => {
        if(!cities.includes(hoarding.city)){
          cities.push(hoarding.city)
        }
      })

      setCityList(cities)
  
    }

    return(
      <div className="bg-gray-600" >
          <div className="container text-white  md:w-1/3 mx-auto p-8 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-white  text-left font-bold text-3xl">Search Hoarding</h1>
            <form
            
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();

                const formData = {location:e.target.location.value, city:e.target.city.value, route:e.target.route.value }
                searchHoardings(formData)
              

              }}
            
            >
              <label htmlFor="location">
                Location
                <input type="text" id="location" className=" w-full mt-1 text-gray-600" placeholder="Location" />
              </label>

              <label htmlFor="city" >
                City
                <select 
                  name="city" id="city" className="w-full mt-1 text-gray-600"
                  onChange={(e) => {
                    setSelCity(e.target.value);                
                   
                  }}
                
                >

                  <option></option>

                  { cityList &&
                    cityList.map(city => {
                      return(
                        <option key={city} value={city}>{city}</option>
                      )
                      
                    })
                  }                 
                </select>
              </label>


              <label htmlFor="route">
                Route
                <select name="route" className="w-full mt-1 text-gray-600"  id="">
                  <option value=""></option>
                  { routes &&
                    routes.map(route => {
                      return(
                        <option key={route} value={route}>{route}</option>
                      )
                    })
                  }  
                    
                </select>
              </label>

              <button className=" bg-green-700 p-3">Search</button>

            </form>
        </div>
      </div>
    )
}

export default SearchPanel;