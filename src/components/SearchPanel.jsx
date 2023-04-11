import { useEffect, useState } from "react";
import "../styles/index.css";
import useRouteList from "./useRouteList";
import { IoMdRefresh } from "react-icons/io";




const SearchPanel = ({searchHoardings}) => {

    const [cityList, setCityList] = useState([]) 
    const [selCity, setSelCity] = useState('');
    const [validationMsg, setValidationMsg] = useState(false)

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

      setCityList(cities);
  
    }

    function showValidationMsg(){
      setValidationMsg(true)

      setTimeout(() => {
        setValidationMsg(false)
      }, 2000)
    }

    return(
      <div  className="bg-[linear-gradient(to_bottom,rgba(1,104,143,0.7763480392156863),rgba(0,41,55,1)),url('../images/background.jpg')]" >
          <div className="container relative text-white  lg:w-2/6 md:w-3/5 mx-auto p-12 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-white  text-left font-bold text-3xl">Search a Hoarding</h1>

            {validationMsg &&<p className="text-left bg-red-700 py-1 px-2">Please fill at least 1 field to show results</p>}

            <form
            
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();

                const formData = {locationId:e.target.locationId.value.toUpperCase(), locationName:e.target.locationName.value, city:e.target.city.value, route:e.target.route.value }
                if(formData.locationId == "" && formData.locationName == "" && formData.city == ""){
                  showValidationMsg();
                }else{
                  searchHoardings(formData)
                }
              }}
            
            >
              <label htmlFor="locationId">
                Location ID
                <input type="text" id="locationId" className=" w-full mt-1 text-gray-600" placeholder="Location ID" />
              </label>

              <p className="text-center font-bold">OR</p>

              <label htmlFor="locationName">
                Location Name
                <input type="text" id="locationName" className=" w-full mt-1 text-gray-600" placeholder="Location Name" />
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
                
                <div className="flex gap-3">
              <button className=" bg-green-600  hover:bg-green-700  transition-all p-3 w-3/4">Search</button>
             <button className="  bg-gray-500 hover:bg-gray-600 text-gray-100 transition-all p-3 w-1/4" onClick={(e) =>{
              e.preventDefault();
              location.reload()
             }} >Clear</button>

                </div>
            </form>

              
        </div>
      </div>
    )
}

export default SearchPanel;