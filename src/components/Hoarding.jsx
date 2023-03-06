import "../styles/index.css"

const Hoarding = ({hoarding}) => {
    console.log(hoarding)
    return(
        <li className="flex flex-row">
            <h2>{hoarding.location} - {hoarding.route} - {hoarding.size} - </h2>
            <button>{hoarding.isAvailable ? " Available" : " Not Available"}</button>
        </li>
    )
}

export default Hoarding;