import React from "react"
import ContractEmployee from "./ContractEmployee";
import { IContract, UserContextType } from "../Type/Employee.type"
import { UserContext } from "../Context/EmployeeContext"
import Navbar from "../Navbar/Navbar";


const ContractEmployeeList = () => {
    const {users} = React.useContext(UserContext) as UserContextType;

    return (
        <>
        <Navbar />
        <div>
            <h3 className="heading">Contractual Employee</h3>
        </div>
        <div>
            {users.map((user: IContract) => (
                <ContractEmployee key={user.id} user={user}/>
            ))}
            </div>
        </>
    )
}

export default ContractEmployeeList