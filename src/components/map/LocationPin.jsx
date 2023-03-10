import { FaMapSigns } from 'react-icons/fa';


const LocationPin = ({ text }) => (
    <div className="pin">
     <h1 className='text-4xl text-red-700'><FaMapSigns /></h1>
      <p className="pin-text">{text}</p>
    </div>
  );

export default LocationPin