import { useParams, useNavigate } from "react-router-dom";
import './country.css';

const CountryDetails = ({ countries }) => {
const { id } = useParams();
const navigate = useNavigate();
const country = countries.find(
(item)=>item.cca3===id);
if(!country){
return <h1>Loading...</h1>
}
return(
    <>
   <div className="country-details">
    <img src={country.flags.png} alt={country.name.common}/>
    <div className="details">
        <h1>{country.name.common}</h1>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Sub Region:</strong> {country.subregion}</p>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Currency:</strong> {country.currency}</p>
        <p><strong>Language:</strong> {country.language}</p>
        <p><strong>Timezone:</strong> {country.timezone}</p>
        <p><strong>Religion:</strong> {country.religion}</p>
        <p><strong>Famous For:</strong> {country.famousFor}</p>
        <p>{country.description}</p>
    </div>
</div>
<button className="back-btn" onClick={() => navigate(-1)}>
  ⬅ Back </button>
</>
)}
export default CountryDetails;
