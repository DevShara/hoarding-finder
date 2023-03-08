import "../styles/index.css"
import { Link } from "react-router-dom"

const Hoarding = ({hoarding}) => {
    return(
        <li className="  border  ">
            <Link to={`/details/${hoarding._id}`}>
            <div className="flex flex-row container  mx-auto md:w-1/2  gap-6  p-3 justify-start ">
                <h2 className=" text-xl">{hoarding.location} - {hoarding.size}  - {hoarding.route}</h2>
                <div className={ ` text-sm p-1 border ${hoarding.isAvailable ? "  border-lime-700 bg-lime-100   text-lime-700" : "  border-red-700 bg-red-100   text-red-700"}  `}>{hoarding.isAvailable ? " Available" : " Not Available"}</div>
            </div>
             
            </Link>
        </li>
    )
}

export default Hoarding;    