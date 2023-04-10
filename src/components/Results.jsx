import { useEffect } from "react";
import Hoarding from "./Hoarding";
import "../styles/index.css"

const Results = ({hoardings, status}) => {

    if(status === "loading"){
        return(

        <div className=" container flex flex-row justify-center mx-auto p-8">
            <svg className="animate-ping h-8 w-8 rounded-full border-green-700  border-4 mr-3 ..."></svg>
        </div>
            
        )
    }

    if(status == "loaded" && hoardings.length == 0) {
        return(
            <div className=" container flex flex-row justify-center  p-8">
                <h1 className="font-semibold text-xl">Sorry! no results found!</h1>
            </div>
        )
    }

    if(status == "loaded" ){
        return(
            <>
                <p className=" mx-auto text-center my-3 text-lg text-gray-500">{hoardings.length} {hoardings.length > 1 ? "hoardings found" : "hoarding found"} </p>
                <ul className=" md:mx-auto mx-6 ">
                { hoardings.map(hoarding => {
                        return(
                            <Hoarding key={hoarding._id} hoarding={hoarding} />
                        )
                    })}
                </ul>
            </>
        )
    }

    
}

export default Results;