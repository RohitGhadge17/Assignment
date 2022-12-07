
import { IContract } from "../Type/Employee.type";
// import "./ContractEmployee.style.css";


type Props = {
    user: IContract;
}

const ContractEmployee = (props: Props) => {

    const { user } = props;

    return (
        <>
            <div style={{ marginTop: "30px", marginLeft: "20px" }}>
                <div className="column">
                    <div className="card">
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Designation:</b> {user.designation}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContractEmployee