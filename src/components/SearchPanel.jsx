import "../styles/index.css"

const SearchPanel = () => {
    return(
      <div className="bg-gray-600" >
          <div className="container mx-auto p-12 flex flex-col gap-3 justify-center items-center">
            <h1 className="text-white font-bold text-4xl">HOARDING FINDER</h1>
            <form>
                <input type="text" className="" />

            </form>
        </div>
      </div>
    )
}

export default SearchPanel;