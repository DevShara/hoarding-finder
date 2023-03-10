import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapSection from './map/Map' // import the map here
import * as Styles from '../styles/table.module.css'



// const location = {
//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216,
//     lng: -122.08427,
//   } // our location object from earlier

const Details = () => {

    const [hoarding, setHoarding] = useState()
    const {id} = useParams();
    // const [mapLocation, setMapLocation] = useState({})


  

    useEffect(() => {
        getHoardingDetails();
    },[])

    async function getHoardingDetails(){
        let PROJECT_ID = "11j4bpx0";
        let DATASET = "production";
        let QUERY = encodeURIComponent(`*[_id == "${id}" ]`);

        let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

            const apiRes = await fetch(URL);
            const res = await apiRes.json();

            setHoarding(res.result[0]);
               
        }

       

    if(!hoarding){
        return(

        <div className=" container flex flex-row justify-center  p-8">
            <svg className="animate-ping h-8 w-8 rounded-full border-green-700  border-4 mr-3 ..."></svg>
        </div>
            
        )
    }

    return(
        <div className=" relative container mx-auto flex gap-6 flex-col w-full justify-center items-center p-5">
            {
                //TODO: hide sanity project id and dataset from the frontend (this is not for permanant)
                hoarding.image && <img className="  rounded-xl  object-cover w-full lg:w-3/4" src={`https://cdn.sanity.io/images/11j4bpx0/production/${hoarding.image.asset._ref.substr(6,48)}.jpg`} alt="" />}
                <div className={ ` absolute top-0  text-sm p-2 border-2 font-bold ${hoarding.isAvailable ? "  bg-lime-700 text-lime-100   " : "  bg-red-700 text-red-100 "}  `}>{hoarding.isAvailable ? " Available" : " Not Available"}</div>
                <table className="    w-full lg:w-3/4">
                    <thead className="">
                    <tr>
                        <th scope="col" >Location</th>
                        <th scope="col" >Size</th>
                        <th scope="col" >City</th>
                        <th scope="col" >Route</th>
                        <th scope="col" >Address</th>
                        <th scope="col" >Land Owner</th>
                        {!hoarding.isAvailable && <th >Client</th> }
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row" data-label="Location" >{hoarding.location}</td>
                            <td data-label="Size" >{hoarding.size}</td>
                            <td data-label="City" >{hoarding.city}</td>
                            <td data-label="Route" >{hoarding.route}</td>
                            <td data-label="Address" >{hoarding.address}</td>
                            <td data-label="Land Owner" >{hoarding.landOwner}</td>
                            {!hoarding.isAvailable && <td data-label="Client" >{hoarding.client}</td> }

                            
                        </tr>
                    </tbody>
                </table>
            
               {hoarding.mapLocation && hoarding.address &&
                <MapSection location={{address: hoarding.address,lat: hoarding.mapLocation.lat, lng: hoarding.mapLocation.lng,}} zoomLevel={17} /> 
                }
        </div>
    )
}   

export default Details;