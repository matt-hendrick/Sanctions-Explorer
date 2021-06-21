import React, { useState } from 'react';
import './Search.scss';

// Algolia Search
import { SearchBox, connectStateResults } from 'react-instantsearch-dom';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ResultTable from '../../components/ResultTable/ResultTable';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Search() {
  const [userSearch, setUserSearch] = useState('');

  const handleUserSearchChange = (event) => {
    const updatedUserSearch = event.target.value;
    setUserSearch(updatedUserSearch);
  };

  const StateResults = ({ searchResults }) => {
    let nbHits = searchResults && searchResults.nbHits;

    if (userSearch === '') {
      nbHits = 0;
      searchResults = null;
    }

    return (
      <React.Fragment>
        <ResultTable hits={searchResults?.hits || null} nbHits={nbHits || 0} />
      </React.Fragment>
    );
  };

  const CustomStateResults = connectStateResults(StateResults);
  return (
    <div className="search">
      <Row>
        <Col className="pl-0 pr-0 sidebar-container" lg={3}>
          <div className="sidebar">
            <h2 className="title">Search</h2>
            <div className="search-box">
              <SearchBox
                searchState={{ query: userSearch }}
                onChange={handleUserSearchChange}
              />

              <div className="filter-group mt-3">
                <label className="filter-group-title w-100 mb-2">
                  Advanced Filters
                </label>
                <Form.Group>
                  <Form.Control as="select">
                    <option>Select Field</option>
                    <option>Active Sanctions</option>
                    <option>Related to Country</option>
                    <option>Nationality</option>
                    <option>Citizenship</option>
                    <option>Place of Birth</option>
                    <option>ID Numbers</option>
                    <option>Location/Address</option>
                    <option>Title/Position</option>
                    <option>Aircraft Info</option>
                    <option>Vessel Info</option>
                    <option>Documents From Country</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <h2 className="title">Filter</h2>
            <div>
              <h3>Type</h3>
              <Button>Type</Button>
              <Button>Organization</Button>
              <Button>Aircraft</Button>
              <Button>Vessel</Button>
            </div>
            <div>
              <h3>Sanctioning Authority</h3>
              <Button>OFAC</Button>
              <Button>UN</Button>
              <Button>EU</Button>
            </div>
            <div className="filter-group">
              <h4 className="filter-group-title">Programs</h4>
              <div className="halfs">
                <div className="half mb-0">
                  <a href="/search" className="sidebar-links">
                    Select Programs
                  </a>
                </div>
                <div className="half mb-0">
                  <input type="checkbox" id="allPrograms" />
                  <label for="allPrograms">All Programs</label>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <a href="/search" className="sidebar-links">
                Reset all filters
              </a>
              <Button className="ml-auto" color="primary">
                Search
              </Button>
            </div>
          </div>
        </Col>
        <CustomStateResults />
      </Row>
    </div>
  );
}

export default Search;
