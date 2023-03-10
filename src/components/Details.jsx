import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div className=" relative container mx-auto flex flex-col w-full justify-center items-center p-5">
            {
                //TODO: hide sanity project id and dataset from the frontend (this is not for permanant)
                hoarding.image && <img className="  rounded-md  object-cover w-3/4" src={`https://cdn.sanity.io/images/11j4bpx0/production/${hoarding.image.asset._ref.substr(6,48)}.jpg`} alt="" />}
                <div className={ ` absolute top-0  text-sm p-2 border-2 font-bold ${hoarding.isAvailable ? "  bg-lime-700 text-lime-100   " : "  bg-red-700 text-red-100 "}  `}>{hoarding.isAvailable ? " Available" : " Not Available"}</div>
                <h2 className=" text-xl">{hoarding.location} - {hoarding.size}  - {hoarding.route}</h2>
        </div>
    )
}

export default Details;