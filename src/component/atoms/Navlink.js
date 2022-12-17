import { Link } from "react-router-dom";

const Navlink = ({ data, click }) => {
  return (
    <li>
      <Link
        className="nav-link"
        to={data.name === "Home" ? "/" : data.name.toLowerCase()}>
        <button type="button" onClick={click}>
          {data.name}
        </button>
      </Link>
    </li>
  );
};

export default Navlink;
