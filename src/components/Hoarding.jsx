import "../styles/index.css"

const Hoarding = ({hoarding}) => {
    return(
        <li className="flex flex-row">
            <h2>{hoarding.location} - {hoarding.route}</h2>
            <button>{hoarding.isAvailable ? "Available" : "Not Available"}</button>
        </li>
    )
}

export default Hoarding;