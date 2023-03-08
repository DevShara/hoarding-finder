import { useEffect } from "react";
import "../styles/index.css";


let CITIES ;

const SearchPanel = ({searchHoardings}) => {

    useEffect(() => {
      getCityList()
    }, []);

    async function getCityList(){
      let PROJECT_ID = "11j4bpx0";
      let DATASET = "production";
    
      let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent("*[_type == 'hoarding']{city}")}`;
  
      const apiRes = await fetch(URL);
      const res = await apiRes.json();
  
     
      CITIES = res.result

      console.log(CITIES);
  
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
                <select name="city" id="city" className="w-full mt-1 text-gray-600" >


                  { CITIES &&
                    CITIES.map(hoarding => {
                      return(
                        <option key={hoarding.city} value={hoarding.city}>{hoarding.city}</option>
                      )
                    })
                  }                 
                </select>
              </label>


              <label htmlFor="route">
                Route
                <select name="route" className="w-full mt-1 text-gray-600"  id="">
                    <option value="Kandy Kurunegala Rd">Kandy Kurunegala Rd</option>
                    <option value="Kurunegala Colombo Road">Kurunegala Colombo Road</option>
                    
                </select>
              </label>

              <button className=" bg-green-700 p-3">Search</button>

            </form>
        </div>
      </div>
    )
}

export default SearchPanel;