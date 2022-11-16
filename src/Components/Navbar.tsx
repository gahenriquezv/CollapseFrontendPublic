import { Link } from "react-router-dom";

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
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav scroll">
            <li className="nav-item">
              <Link to="/s1" className="nav-link" aria-current="page">
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
