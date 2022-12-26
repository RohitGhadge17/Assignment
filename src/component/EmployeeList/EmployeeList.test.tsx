import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  getByText,
  render,
} from "@testing-library/react";
import EmployeeList from "./EmployeeList";
import { IEmployee } from "../Type/Employee.type";

// test('check for button', () => {
//     const {getByAltText} = render(<EmployeeList list={[]} onDeleteClickHnd={function (data: IEmployee): void {
//         throw new Error("Function not implemented.");
//     } } onEdit={function (data: IEmployee): void {
//         throw new Error("Function not implemented.");
//     } } />)

//     const button = getByAltText("Update");
//     expect(button).toBeInTheDocument();
// })


test('check button', ()=> {
    const {getByRole} = render(<EmployeeList list={[]} onDeleteClickHnd={function (data: IEmployee): void {
        throw new Error("Function not implemented.");
    } } onEdit={function (data: IEmployee): void {
        throw new Error("Function not implemented.");
    } } />)

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
})

// test("check if buttons are present in cards", () => {
//     const {getByTestId} = render(<EmployeeList list={[]} onDeleteClickHnd={function (data: IEmployee): void {
//         throw new Error("Function not implemented.");
//     } } onEdit={function (data: IEmployee): void {
//         throw new Error("Function not implemented.");
//     } } />);

//     const button = getByTestId("editbtn");
//     expect(button).toBeInTheDocument();
// })