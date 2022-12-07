import React, { useState } from "react"
import { IContract, UserContextType } from "../Type/Employee.type"
import { UserContext } from "../Context/EmployeeContext"
import Navbar from "../Navbar/Navbar"
import { useNavigate } from "react-router-dom"
// import "../AddEmployee/AddEmployee.styles.css";

const AddContractEmployee = () => {

    const {saveUser} = React.useContext(UserContext) as UserContextType;

    const [userData, setUserData] = useState<IContract | {}>();

    let navigate = useNavigate();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setUserData({
            ...userData, [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleSaveUser = (e: React.FormEvent, userData: IContract | any) => {
        e.preventDefault();
        saveUser(userData);
        navigateEmployeeList();
      };

      const navigateEmployeeList = () => {
          navigate("/contractemployeepage")
      }

    return (
        <>
        <Navbar />
        <div className="form-container">
            <div>
                <h3 className="heading">Add Contract Employee</h3>
            </div>
        <form onSubmit={(e) => handleSaveUser(e, userData)}>
        <div>
            <div>
                <label htmlFor="name">FirstName</label>
                <input onChange={handleForm} type="text" id="name" placeholder="firstname" required pattern="[A-Za-z]+" title="Must contain alphabets only, numbers not allowed" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={handleForm} type="text" id="email" placeholder="email" required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" title="Must contain alphabets followed by @ and ."/>
            </div>
            <div>
                <label htmlFor="designation">Designation</label>
                <input onChange={handleForm} type="text" id="designation" placeholder="designation" required pattern="[A-Za-z0-9-]+" title="Must contain alphabets or numbers are allowed" />
            </div>
        </div>

        {/* <input type="submit" className="btn">Add User</input> */}
        <input type="submit" className="btn" value="Submit" />
        </form>
        </div>
        </>
    )
}

export default AddContractEmployee