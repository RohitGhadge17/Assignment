import { useSelector, useDispatch } from "react-redux";
import { EmpState } from "../redux/empReducer";
import { PageEnum } from "../Type/Employee.type";
import "./Header.style.css"

type Props = {
  title: string;
}

const Header = (props:Props) => {

  const {title} = props;
  return (
    <>
      <ul className="header-content">
        <li>
          <h3>{props.title}</h3>
        </li>
      </ul>
    </>
  );
};

export default Header;
