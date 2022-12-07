export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    designation: string;
}

export const EmployeeListItem: IEmployee[] = [{
    id: new Date().toJSON().toString(),
    firstName: "Rohit",
    lastName: "Ghadge",
    email: "rohit@gmail.com",
    designation: "software Engineer"
},
]

//interface for contract employee
export interface IContract {
    id: number;
    name: string;
    email: string;
    designation: string;
}

export type UserContextType = {
    users: IContract[];
    saveUser: (user: IContract) => void;
}

export enum PageEnum {
    list,
    add,
    edit,
}