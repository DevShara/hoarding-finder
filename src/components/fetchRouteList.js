import { useEffect } from "react"


const fetchRouteList = (city) => {
    useEffect(() => {
        console.log('CITY CHANGED');
    }, [city])

    return ["Kandy", "Matale", "Jaffna"]; 
    
}

export default fetchRouteList;