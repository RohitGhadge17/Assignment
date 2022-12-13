
import { IContract } from "../Type/Employee.type";
// import "./ContractEmployee.style.css";


type Props = {
    user: IContract;
    onRemove: (id: number) => void;
    onUpdate: (users: IContract) => void;
}

const ContractEmployee = (props: Props) => {

    const { user, onRemove, onUpdate } = props;


    return (
        <>
            <div style={{ marginTop: "30px", marginLeft: "20px" }}>
                <div className="column">
                    <div className="card">
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Designation:</b> {user.designation}</p>

                        <input type="button" value="Update" className="update-btn" onClick={() => onUpdate(user)} />
                        <input type="button" value="Delete" className="delete-btn" onClick={() => onRemove(user.id)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContractEmployee