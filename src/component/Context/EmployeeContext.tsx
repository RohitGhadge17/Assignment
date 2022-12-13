import React, { PropsWithChildren, useState } from "react";
import { IContract, UserContextType } from "../Type/Employee.type";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [users, setUsers] = useState<IContract[]>([
        {
            id: 1,
            name: "Rohit",
            email: "rohit@test.com",
            designation: "QA",
        },
    ]);

let myUsers;

    const saveUser = (user: IContract) => {
        const newUser: IContract = {
            id: Math.random(),
            name: user.name,
            email: user.email,
            designation: user.designation,
        }
myUsers = newUser;
        localStorage.setItem('links',JSON.stringify([...users, myUsers]));

        setUsers([...users, newUser]);
localStorage.setItem('links',JSON.stringify([...users, myUsers]));
    }

    return (
        <UserContext.Provider value={{users, saveUser}}>{children}</UserContext.Provider>
    )
}