import React from "react"
import ContractEmployee from "./ContractEmployee";
import { IContract, UserContextType } from "../Type/Employee.type"
import { UserContext } from "../Context/EmployeeContext"
import Navbar from "../Navbar/Navbar";


const ContractEmployeeList = () => {
    const {users} = React.useContext(UserContext) as UserContextType;

    const [userList, setUserList] = useState(users);
    console.log(userList);


    // const deleteUser = (users: IContract) => {
    //     const indexToDeleteData = userList.indexOf(users);
    //     console.log(indexToDeleteData);
        
    //     const tempData = [...userList];

    //     tempData.splice(indexToDeleteData, 1);
    //     setUserList(tempData);
    //     // const data = setUserList(tempData);
    //     // console.log(data);
        
    // }

    // const deleteUser = (users:IContract) => {
    //     const newList = userList.filter((l) => l.id !== users.id);
    //     setUserList(newList);

    // }

    const deleteUser = (id: number) => {
        const newList = userList.filter((l) => l.id !== id) 
        setUserList(newList);
    }

    return (
        <>
        <Navbar />
        <div>
            <h3 className="heading">Contractual Employee</h3>
        </div>
        <div>
            {users.map((user: IContract) => (
                <ContractEmployee key={user.id} user={user} onRemove={deleteUser}/>
            ))}
            </div>
        </>
    )
}

export default ContractEmployeeList