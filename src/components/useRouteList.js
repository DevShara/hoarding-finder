import { useEffect, useState } from "react";


const localCache = {}

const useRouteList = (city) => {

    const [routeList, setRouteList] = useState(); 

    useEffect(() => {
        if(!city){
            setRouteList([])
        }else if(localCache[city]){
            setRouteList(localCache[city])
        }else{            
            fetchRoutes();
        }
    }, [city]);

    async function fetchRoutes(){
        let PROJECT_ID = "11j4bpx0";
        let DATASET = "production";
      
        let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent(`*[city == "${city}"]{route}`)}`;
    
        const apiRes = await fetch(URL);
        const res = await apiRes.json();

        const routes = [];
        res.result.forEach(hoarding => {
            routes.push(hoarding.route)
        })

       
        localCache[city] = routes;
        setRouteList(localCache[city]);
    
      }

    return routeList; 
    
}

export default useRouteList;