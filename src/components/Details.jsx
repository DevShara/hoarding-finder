import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapSection from './map/Map' // import the map here



const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  } // our location object from earlier

const Details = () => {

    const [hoarding, setHoarding] = useState()
    const {id} = useParams();

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

            console.log(res);

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
                hoarding.image && <img className="  rounded-xl  object-cover w-3/4" src={`https://cdn.sanity.io/images/11j4bpx0/production/${hoarding.image.asset._ref.substr(6,48)}.jpg`} alt="" />}
                <div className={ ` absolute top-0  text-sm p-2 border-2 font-bold ${hoarding.isAvailable ? "  bg-lime-700 text-lime-100   " : "  bg-red-700 text-red-100 "}  `}>{hoarding.isAvailable ? " Available" : " Not Available"}</div>
                <table className="border-collapse border border-slate-400 w-3/4  ">
                    <thead className="">
                    <tr>
                        <th class=" bg-gray-200 border border-slate-300   p-2">Location</th>
                        <th class=" bg-gray-200 border border-slate-300 p-2">City</th>
                        <th class=" bg-gray-200 border border-slate-300 p-2">Route</th>
                        <th class=" bg-gray-200 border border-slate-300 p-2">Address</th>
                        <th class=" bg-gray-200 border border-slate-300 p-2">Land Owner</th>
                        {!hoarding.isAvailable && <th class=" bg-gray-200 border border-slate-300 p-2">Client</th> }
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-slate-300  p-2">{hoarding.location}</td>
                            <td class="border border-slate-300  p-2">{hoarding.size}</td>
                            <td class="border border-slate-300  p-2">{hoarding.route}</td>
                            <td class="border border-slate-300  p-2">No. 7/1, Kandy Rd, Hadeniya.</td>
                            <td class="border border-slate-300  p-2">P.K.G.I.S. Weerasinghe</td>
                            {!hoarding.isAvailable && <td class="border border-slate-300 p-2">HNB Bank</td> }

                            
                        </tr>
                    </tbody>
                </table>

                <MapSection location={location} zoomLevel={17} /> {/* include it here */}

        </div>
    )
}   

export default Details;