import { useEffect } from "react";
import Hoarding from "./Hoarding";
import "../styles/index.css"

const Results = ({hoardings}) => {


    if(hoardings.length == 0) {
        return(
            <h1>NO RESULTS FOUND</h1>
        )
    }


    return(
        <ul className="  mx-auto">
           { hoardings.map(hoarding => {
                return(
                    <Hoarding key={hoarding._id} hoarding={hoarding} />
                )
            })}
        </ul>
    )
}

export default Results;