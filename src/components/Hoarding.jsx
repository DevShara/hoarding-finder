import "../styles/index.css"
import { Link } from "react-router-dom"

const Hoarding = ({hoarding}) => {
    console.log(hoarding)
    return(
        <li className="  border  ">
            <Link to={`/details/${hoarding._id}`}>
            <div className="flex flex-row container  mx-auto w-1/2  gap-6  p-3 justify-start ">
                <h2 className=" text-xl">{hoarding.location} - {hoarding.size}  - {hoarding.route}</h2>
                <div className=" text-sm border-lime-700 bg-lime-100 border p-1 font-semibold text-lime-700  ">{hoarding.isAvailable ? " Available" : " Not Available"}</div>
            </div>
             
            </Link>
        </li>
    )
}

export default Hoarding;    