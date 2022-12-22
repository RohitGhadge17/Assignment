import React from "react";
import { NavLink } from "react-router-dom";
// import "./Navbar.style.css";

const Navbar = () => {
    return (
        <header data-testid="navbar-list" className="navbar">
            {/* <div className="link" to="/"  >Home</div>
            <div className="link" to="/addemployee"  >Add Employee</div>
            <div className="link" to="/addcontractemployee">Add ContractEmployee</div>
            <div className="link" to="/contractemployeepage">ContractEmployeePage</div> */}
            <div className="link">Home</div>
            <div className="link">Add Employee</div>
            <div className="link">Add ContractEmployee</div>
            <div className="link">ContractEmployeePage</div>

        </header>
    )
}

export default Navbar