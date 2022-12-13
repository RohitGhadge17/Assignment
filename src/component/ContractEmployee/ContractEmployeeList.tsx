import React, { useState } from "react"
import ContractEmployee from "./ContractEmployee";
import { IContract, PageEnum, UserContextType } from "../Type/Employee.type"
import { UserContext } from "../Context/EmployeeContext"
import Navbar from "../Navbar/Navbar";
import UpdateContractEmployee from "./UpdateContractEmployee";
import { useNavigate } from "react-router-dom";


const ContractEmployeeList = () => {
    var retirievedData = localStorage.getItem("links");
    var contractemployeelist = JSON.parse(retirievedData || "");

    const { users } = React.useContext(UserContext) as UserContextType;

    const [userList, setUserList] = useState(contractemployeelist);
    console.log(userList);

    const [displayPage, setDisplayPage] = useState(PageEnum.clist);

    const [dataToUpdate, setDataToUpdate] = useState({} as IContract)

    let navigate = useNavigate();




    const deleteUser = (id: number) => {
        const newList = userList.filter((l: any) => l.id !== id)
        setUserList(newList);
    }

    // const onUpdateEmployeeData = (users: IContract) => {
    //     setDataToUpdate(users);
    // }

    const updateData = (users: IContract) => {
        setDisplayPage(PageEnum.editcontract);
        setDataToUpdate(users);
    }

    const editedData = (users: IContract) => {
        const filteredUserData = userList.filter((x:any) => x.id === users.id)[0];

        const indexOfUserRecord = userList.indexOf(filteredUserData);

        const tempUser = [...userList];
        tempUser[indexOfUserRecord] = users;
        setUserList(tempUser);
        contractUserPage();
    }

    const contractUserPage = () => {
        navigate("/contractemployeepage");
    }

    return (
        <>
            {displayPage === PageEnum.clist &&
                <>
                    <div>
                        <h3 className="heading">Contractual Employee</h3>
                    </div>
                    <div>
                        {userList.map((user: IContract) => (
                            <ContractEmployee key={user.id} user={user} onRemove={deleteUser} onUpdate={updateData} />
                        ))}
                    </div>
                </>
            }

            {displayPage === PageEnum.editcontract && <UpdateContractEmployee users={dataToUpdate} onEditClickHnd={editedData} />}
        </>

    )
}

export default ContractEmployeeList