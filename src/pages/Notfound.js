import { Link } from "react-router-dom";
import Buttons from "../component/molecules/Buttons";

const NotFound = () => {
  return (
    <section className="card">
      <h2>Page Not Found</h2>
      <div className="card-body">
        <Link to="/" className="nav-link">
          <Buttons name="Home" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
