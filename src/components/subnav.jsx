import React from 'react'; 
import NavDropdown from 'react-bootstrap/NavDropdown';

function Subnav() {
  return (
    <div className="d-flex justify-content-between bggg text-white py-2 px-3">
      <div className="d-flex">
        <h2 className="mb-4">TV Shows</h2>
        <NavDropdown title="Genres" id="basic-nav-dropdown" className="ms-4 mt-1">
          <NavDropdown.Toggle
            variant="secondary"
            size="sm"
            className="rounded-0"
            style={{ backgroundColor: '#221f1f' }}
          >
            Genres
          </NavDropdown.Toggle>
          <NavDropdown.Menu>
            <NavDropdown.Item href="#">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="#">Drama</NavDropdown.Item>
            <NavDropdown.Item href="#">Thriller</NavDropdown.Item>
          </NavDropdown.Menu>
        </NavDropdown>
      </div>
      <div>
        <i className="bi bi-grid icons" id="ml"></i>
        <i className="bi bi-grid-3x3 icons" id="ml"></i>
      </div>
    </div>
  );
}

export default Subnav;

