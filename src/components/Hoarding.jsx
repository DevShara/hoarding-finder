import "../styles/index.css"
import { Link } from "react-router-dom"

const Hoarding = ({hoarding}) => {
    // console.log(hoarding)

    hoarding.image && console.log()
    return(
        <li className="  border  ">
            <Link to={`/details/${hoarding._id}`}>
            <div className="flex flex-row   gap-6  p-3 justify-center  items-center ">
                
                {
                   //TODO: hide sanity project id and dataset from the frontend (this is not for permanant)
                hoarding.image && <img className="  rounded-md  object-scale-down w-28 " src={`https://cdn.sanity.io/images/11j4bpx0/production/${hoarding.image.asset._ref.substr(6,48)}.jpg`} alt="" />}
                <h2 className=" text-xl">{hoarding.location} - {hoarding.size}  - {hoarding.route}</h2>
                <div className={ ` text-sm p-1 border ${hoarding.isAvailable ? "  border-lime-700 bg-lime-100   text-lime-700" : "  border-red-700 bg-red-100   text-red-700"}  `}>{hoarding.isAvailable ? " Available" : " Not Available"}</div>
            </div>
             
            </Link>
        </li>
    )
}

export default Hoarding;    