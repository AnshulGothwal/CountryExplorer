import React from 'react'
import "./Card.css"
import { Link } from "react-router-dom";
const Card = ({country}) => {
  return (
    <> 
    <div className="card">
    <img src={country.flags.png} alt={country.name.common} />

    <div className="card-content">
        <h2>{country.name.common}</h2>

        <p><strong>Population:</strong>{country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong>{country.capital?.[0]}</p>

        <Link to ={`/country/${country.cca3}`}>
         <button className="read-btn">
            Read More
        </button>
        </Link>
    </div>
</div>
    </>
  )
}
export default Card
