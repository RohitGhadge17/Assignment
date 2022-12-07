import AddEmployee from "../AddEmployee/AddEmployee";
import { IEmployee, PageEnum } from "../Type/Employee.type";
import EmployeeList from "../EmployeeList/EmployeeList";
import "./Home.style.css";
import { useSelector, useDispatch } from "react-redux";
import { EmpState } from "../redux/empReducer";
import Header from "../Header/Header";
import EditEmployee from "../EditEmployee/EditEmployee";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ContractEmployeeList from "../ContractEmployee/ContractEmployeeList";


const Home = () => {

  const dispatch = useDispatch();

  const employeeList = useSelector<EmpState, EmpState["employeeList"]>(
    (state) => state.employeeList
  );
  const shownPage = useSelector<EmpState, EmpState["shownPage"]>(
    (state) => state.shownPage
  );

  const showListPage = () => {
    dispatch({ type: "ADD_EMP_CLICK", payload: PageEnum.list });
    dispatch({ type: "EDIT_EMP", payload: null });
  };

  //Add Employee
  const addEmployeeHnd = (data: IEmployee) => {
    dispatch({ type: "ADD_EMP", payload: data });
    dispatch({ type: "ADD_EMP_CLICK", payload: PageEnum.list });
  };

  //Delete Employee
  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];
    tempList.splice(indexToDelete, 1);
    dispatch({ type: "UPDATE_EMP", payload: tempList });
  };

  //Edit Employee data

  const editEmployeeData = (data: IEmployee) => {
    dispatch({ type: "ADD_EMP_CLICK", payload: PageEnum.edit });
    dispatch({ type: "EDIT_EMP", payload: data });
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    dispatch({ type: "UPDATE_EMP", payload: tempData });
    dispatch({ type: "ADD_EMP_CLICK", payload: PageEnum.list });
    dispatch({ type: "EDIT_EMP", payload: null });
  };

  return (
    <div className="container">
      {/* Header section */}
      {/* <Header title="Home Page" /> */}
      <Navbar />
      

      {/* Actual content */}
      <section className="section-content">
        {shownPage === PageEnum.list && (
          <div style={{ flexDirection: "column" }}>
            {employeeList.length > 0 ? (
              <>
              <EmployeeList
                list={employeeList}
                onDeleteClickHnd={deleteEmployee}
                onEdit={editEmployeeData}
              />
              </>
            ) : (
              <div>
                <h3 className="message">No Data To Display!</h3>
              </div>
            )}
          </div>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployeeHnd}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditEmployee
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </div>
  );
};

export default Home;
