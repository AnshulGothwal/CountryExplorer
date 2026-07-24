import './App.css'
import './components/Card.css'
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import {useState,useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import Footer from "./components/footer";

function App() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);
 
  // Search State
  const [search, setSearch] = useState("");
  // ================= FILTER STATE =================
const [region, setRegion] = useState("All");
// ===============================================

// ================= SEARCH + FILTER =================
const filteredCountries = countries.filter((country) => {

  // Search Check
  const matchesSearch = country.name.common
    .toLowerCase()
    .includes(search.toLowerCase());

  // Region Check
  const matchesRegion =
    region === "All" || country.region === region;

  // Dono true hone chahiye
  return matchesSearch && matchesRegion;
});
// =================================================

  const totalPages = Math.ceil(filteredCountries.length / cardsPerPage);
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

const currentCountries = filteredCountries.slice(firstIndex,lastIndex);
  useEffect(()=>{
    async function fetchCountries() {
      const response = await fetch("./db.json");
      const data = await response.json();
      setCountries(data);
    }
    fetchCountries();
  },[]);
  // pagenation-----------------------------------------
  useEffect(() => {
    function updateCardsPerPage(){
        if(window.innerWidth <= 600){
            setCardsPerPage(4);
        }
        else if(window.innerWidth <= 992){

            setCardsPerPage(6);

        }
        else{
            setCardsPerPage(8);
        }
    }
    updateCardsPerPage();
    window.addEventListener("resize",updateCardsPerPage);
    return ()=>window.removeEventListener("resize",updateCardsPerPage);
},[]);

// ---------------------------------------
  return (
  <>
  <Routes>

    {/* Home Page */}
    <Route
      path="/"
      element={
        <>
          <Navbar
            search={search}
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
          />

          <div className="cards-container">
            {currentCountries.map((country) => (
              <Card
                key={country.cca3}
                country={country}
              />
            ))}
          </div>

          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>

          <Footer />
        </>
      }
    />

    {/* Details Page */}
    <Route
      path="/country/:id"
      element={<CountryDetails countries={countries} />}
    />

  </Routes>
  </>
  )
}
export default App
