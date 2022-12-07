import React, { useState } from "react";
// import "./AddEmployee.style.css";
import { IEmployee } from "../Type/Employee.type";
import { useSelector, useDispatch } from "react-redux";
import { EmpState } from "../redux/empReducer";
import { useNavigate } from "react-router-dom";
import "../AddEmployee/AddEmployee.style.css"

type Props = {
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const data = useSelector<EmpState, EmpState["editEmp"]>(
    (state) => state.editEmp
  );
  const { onBackBtnClickHnd, onUpdateClickHnd } = props;
  const [firstName, setFirstName] = useState(data?.firstName);
  const [lastName, setLastName] = useState(data?.lastName);
  const [email, setEmail] = useState(data?.email);
  const [designation, setDesignation] = useState(data?.designation);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const OnDesignationChangeHnd = (e: any) => {
    setDesignation(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      designation: designation,
    };
    onUpdateClickHnd(updatedData);
    
    onBackBtnClickHnd();
  };

  return (
    <>
    <div className="form-container">
      <div>
        <h3 className="heading">Update Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <label htmlFor="fname"><b>First name :</b> </label>
        <input type="text" placeholder="Your first name..." value={firstName} onChange={onFirstNameChangeHnd} pattern="[A-Za-z]+" required title="Must contain alphabets only, numbers not allowed" />

        <label htmlFor="lname"><b>Last Name :</b> </label>
        <input type="text" placeholder="Your last name..." value={lastName} onChange={onLastNameChangeHnd} pattern="[A-Za-z]+" required title="Must contain alphabets only, numbers not allowed" />

        <label htmlFor="email"><b>Email :</b> </label>
        <input type="text" placeholder="Enter email..." value={email} onChange={onEmailChangeHnd} required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" title="Must contain alphabets followed by @ and ." />

        <label htmlFor="designation"><b>Designation :</b> </label>
        <input type="text" placeholder="Enter designation..." value={designation} onChange={OnDesignationChangeHnd} pattern="[A-Za-z0-9-]+" required title="Must contain alphabets or numbers are allowed" />

        <input type="button" value="Back" onClick={onBackBtnClickHnd} className="back-btn" />
        <input type="submit" className="btn" value="Update" />
      </form>
    </div>
    </>
  );
};

export default EditEmployee;
