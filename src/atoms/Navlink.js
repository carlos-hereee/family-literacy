import { Link } from "react-router-dom";

const Navlink = ({ data }) => {
  return (
    <li>
      <Link
        className="nav-link"
        to={data.name === "Home" ? "/" : data.name.toLowerCase()}>
        {/* <button onClick={click}>{data.name}</button> */}
        {data.name}
      </Link>
    </li>
  );
};

export default Navlink;
