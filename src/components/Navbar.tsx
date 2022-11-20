import { Link } from "react-router-dom";

/**
 * Returns the Navbar component. Includes fixed data (links to other pages using react router)
 * @returns Navbar component
 */
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Sistema de predicción de colapsos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav scroll">
            <li className="nav-item">
              <Link to="/s1" className="nav-link">
                Sector 01
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/s2" className="nav-link">
                Sector 02
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/s3" className="nav-link">
                Sector 03
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
