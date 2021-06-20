import React, { useState, useEffect } from 'react';
import './Search.css';
import axios from 'axios';

// Components
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search() {
  const [SDNList, setSDNList] = useState();

  useEffect(() => {
    axios
      .get('https://us-central1-sanctionsexplorer.cloudfunctions.net/api/SDN')
      .then((res) => {
        console.log(res.data.entities);
        setSDNList(res.data.entities);
      })
      .catch((err) => console.error(err?.response?.data));
  });

  return (
    <div className="search">
      {SDNList ? (
        <Row>
          <Col className="pl-0 pr-0 sidebar-container">
            <Sidebar />
          </Col>
          <Col className="pr-0 pl-0" md={{ size: 9, order: 2, offset: 3 }}>
            <h2>Results {SDNList.length}</h2>
            {SDNList.map((item) => {
              return <div>{item.item.lastName}</div>;
            })}
            <Footer />
          </Col>
        </Row>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
}

export default Search;
