import React, { useState } from 'react';
import './Home.css';
import Logo from '../../images/logo.png';
import SearchImage from '../../images/search.png';

// React Router
import { Redirect } from 'react-router-dom';

// Bootstrap
import Form from 'react-bootstrap/Form';

function Home() {
  const [userSearch, setUserSearch] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleUserSearchChange = (event) => {
    const updatedUserSearch = event.target.value;
    setUserSearch(updatedUserSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setRedirect(true);
  };

  let updatedDate = new Date('6 / 11 / 2021');

  let display = (
    <div className="home">
      <div className="d-flex align-items-center justify-content-center home-inner">
        <div className="text-center">
          <img className="logo" src={Logo} alt="Sanctions Explorer Logo" />
          <p>Explore 28 years of sanctions data</p>
          <Form aria-label="Search" onSubmit={handleSubmit}>
            <div className="search-bar d-flex">
              <input
                className="form-control home-search"
                type="text"
                aria-label="Enter keyword to search OFAC, UN and EU data"
                placeholder="Search OFAC, UN and EU"
                value={userSearch}
                onChange={handleUserSearchChange}
              />
              <div>
                <button
                  className="btn btn-primary"
                  aria-label="Search Button"
                  color="primary"
                >
                  <img src={SearchImage} alt="Search Icon" />
                </button>
              </div>
            </div>
          </Form>

          <p className="mt-2">
            18,927 entries across OFAC, UN and EU. Updated{' '}
            {((Date.now() - updatedDate) / (1000 * 3600 * 24)).toFixed(0)} days
            ago
          </p>
        </div>
      </div>
    </div>
  );

  if (redirect) display = <Redirect to={`/search?q=${userSearch}`} />;

  return display;
}

export default Home;
