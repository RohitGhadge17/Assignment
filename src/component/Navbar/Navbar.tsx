import { NavLink } from "react-router-dom";
import "./Navbar.style.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <NavLink className="link" to="/" >Home</NavLink>
            <NavLink className="link" to="/addemployee"  >Add Employee</NavLink>
            <NavLink className="link" to="/addcontractemployee">Add ContractEmployee</NavLink>
            <NavLink className="link" to="/contractemployeepage">ContractEmployeePage</NavLink>

        </header>
    )
}

export default Navbar