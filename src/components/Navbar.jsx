import React from 'react'
const Navbar = ({search,setSearch,
  region,setRegion}) => {
  return (
    <>
    <nav className="navbar">
        <h1 className="h">
        CountryExplorer
        </h1>

        <div className="divv">
            <input
            type="text"
            placeholder="Search Country..."
            className="input"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

            <select className="filters border rounded-md bg-white"
            value={region}
            onChange={(e)=>setRegion(e.target.value)}>
            <option value="All">Filter by Region</option>
            <option>Africa</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Americas</option>
            </select>
        </div>
    </nav>
    </>
  )
}
export default Navbar;
