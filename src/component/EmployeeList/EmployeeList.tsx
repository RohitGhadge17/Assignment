import { IEmployee } from "../Type/Employee.type";
import "./EmployeeList.style.css";
import React, { useState } from "react";
import EmployeeModal from "../EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {

  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToshow, setDataToshow] = useState(null as IEmployee | null);
  // const viewEmployee = (data: IEmployee) => {
  //   setDataToshow(data);
  //   setShowModal(true);
  // };
  const onCloseModal = () => setShowModal(false);

  return (
    <>
      <h3 className="heading">Employee List</h3>
      <div className="row">
        {list.map((employee, index) => {
          return (
            <div key={employee.id}>
              <div className="column">
                <div className="card">
                  <p><b>Name:</b> {employee.firstName} {employee.lastName}</p>
                  <p><b>Email:</b> {employee.email}</p>
                  <p><b>Designation:</b> {employee.designation}</p>

                  <input type="button" value="Update" className="update-btn" onClick={() => onEdit(employee)} />
                  <input type="button" value="Delete" onClick={() => onDeleteClickHnd(employee)} className="delete-btn" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default EmployeeList;
