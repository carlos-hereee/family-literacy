import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="card">
      <h2>404 Page Not Found</h2>
      <div className="card-body">
        <Link to="/">
          {/* <Buttons name="Home" /> */}
          To home page
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
