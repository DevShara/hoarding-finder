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
            <svg class="animate-ping h-8 w-8 rounded-full border-green-700  border-4 mr-3 ..."></svg>
        </div>
            
        )
    }

    return(
        <div className=" container flex flex-row justify-center p-5">
            <h2 className=" text-xl">{hoarding.location} - {hoarding.size}  - {hoarding.route}</h2>
        </div>
    )
}

export default Details;