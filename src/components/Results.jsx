import { useEffect } from "react";
import Hoarding from "./Hoarding";
import "../styles/index.css"

const Results = ({hoardings}) => {

    if(!hoardings){
        return(

        <div className=" container flex flex-row justify-center  p-8">
            <svg className="animate-ping h-8 w-8 rounded-full border-green-700  border-4 mr-3 ..."></svg>
        </div>
            
        )
    }


    if(hoardings.length == 0) {
        return(
            <h1>NO RESULTS FOUND</h1>
        )
    }

    


    return(
        <ul className=" mx-auto">
           { hoardings.map(hoarding => {
                return(
                    <Hoarding key={hoarding._id} hoarding={hoarding} />
                )
            })}
        </ul>
    )
}

export default Results;