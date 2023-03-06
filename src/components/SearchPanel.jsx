import "../styles/index.css"

const SearchPanel = () => {
    return(
      <div className="bg-gray-600" >
          <div className="container text-white  md:w-1/3 mx-auto p-8 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-white  text-left font-bold text-3xl">Search Hoarding</h1>
            <form className="w-full flex flex-col gap-4">
              <label htmlFor="location">
                Location
                <input type="text" id="location" className=" w-full mt-1 text-gray-600" placeholder="Location" />
              </label>

              <label htmlFor="city" >
                City
                <select name="city" id="city" className="w-full mt-1 text-gray-600" >
                  <option value="">Kurunegala</option>
                  <option value="">Kandy</option>
                  <option value="">Colombo</option>
                  <option value="">Katugastota</option>
                  <option value="">Matale</option>
                </select>
              </label>


              <label htmlFor="route">
                Route
                <select name="route" className="w-full mt-1 text-gray-600"  id="">
                    <option value="">Kurunegala Kandy Road</option>
                    <option value="">Kurunegala Colombo Road</option>
                    
                </select>
              </label>

              <button className=" bg-green-700 p-3">Search</button>

            </form>
        </div>
      </div>
    )
}

export default SearchPanel;