import "../styles/index.css"
import { Link } from "react-router-dom"
import {client} from '../../sanityClient';
import imageUrlBuilder from '@sanity/image-url'

const Hoarding = ({hoarding}) => {
    // console.log(hoarding)


    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source)
      }

    
    return(
        <li className="    bg-gray-200 rounded-lg mb-2  mx-auto  hover:bg-gray-300 transition-all ">
            <Link to={`/details/${hoarding._id}`}>
            <div className="md:flex md:flex-row flex flex-col gap-2 content-start md:gap-4 relative p-3 md:justify-center  md:h-16 md:max-h-16  items-start	 md:items-center   ">
                
                {
                //  TODO: Have to decide whether an image needs or not
                // hoarding.image && <img className="  rounded-md  object-scale-down w-28 " src={urlFor(hoarding.image).width(50).url()} alt="" /> 
                }

                <span className=" bg-gray-800 px-2.5  py-1.5 text-white   text-sm rounded-full">{hoarding.locationId}</span>
                <h2 className=" text-xl"><span className="font-semibold">{hoarding.locationName} {hoarding.size}</span>  - {hoarding.route} </h2>
                <h3 className=" text-sm  text-gray-500">Face to {hoarding.faceTo}</h3>
                <span className={ `
                     text-sm p-1 border rounded-md md:relative md:top-0 md:right-0  absolute top-3 right-3
                    ${hoarding.state == "toLet" ? "  border-lime-700 bg-lime-100 text-lime-700" :
                    hoarding.state == "display" ?  " border-red-700 bg-red-100   text-red-700" :
                    "border-gray-700 bg-gray-100   text-gray-700"}`}>
                        {hoarding.state == "toLet" ? "To Let"  : hoarding.state == "display" ? "Display" : "pending"}
                </span>
            </div>
             
            </Link>
        </li>
    )
}

export default Hoarding;    