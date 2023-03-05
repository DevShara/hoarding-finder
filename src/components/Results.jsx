import { useEffect } from "react";
import Hoarding from "./Hoarding";
import "../styles/index.css"

const Results = () => {

    const hoarding = {location:"Gettuwana", Size:"80x20", route:"Kandy Kurunegala Rd", isAvailable:false};

    return(
        <ul className=" container mx-auto">
        <Hoarding hoarding={hoarding} />
        </ul>
    )
}

export default Results;