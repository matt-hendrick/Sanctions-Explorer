import React, { useState, useEffect } from 'react';
import './Search.scss';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import Clipboard from 'react-clipboard.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

// Components
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

function Search() {
  const [SDNList, setSDNList] = useState();

  const headers = [
    { title: 'Entity Name', field: 'lastName' },
    { title: 'Type', field: 'sdnType' },
    { title: 'Authority', field: 'Authority' },
    { title: 'Current Programs', field: 'programList' },
    { title: 'Active Sanctions', field: 'Active Sanctions' },
  ];

  useEffect(() => {
    axios
      .get('https://us-central1-sanctionsexplorer.cloudfunctions.net/api/SDN')
      .then((res) => {
        console.log(res.data.entities);
        setSDNList(res.data.entities);
      })
      .catch((err) => console.error(err?.response?.data));
  }, []);

  return (
    <div className="search">
      {SDNList ? (
        <Row>
          <Col className="pl-0 pr-0 sidebar-container" lg={3}>
            <Sidebar />
          </Col>
          <Col className="pr-0 pl-0" md={{ size: 9, order: 2 }}>
            <main className="content">
              <div className="content-title d-flex">
                <h1>
                  Results <span>({SDNList.length})</span>
                </h1>
              </div>
              {SDNList.length > 0 && (
                <div className="actions d-flex ml-auto">
                  <div>
                    <a href="/search">
                      <FontAwesomeIcon icon="file-csv" />
                      CSV
                    </a>
                  </div>
                  <div>
                    <ReactToPrint
                      trigger={() => (
                        <a href="/search">
                          <FontAwesomeIcon icon="print" />
                          PRINT
                        </a>
                      )}
                    />
                  </div>
                  <Clipboard
                    component="a"
                    button-href="#"
                    className="ml-2 text-uppercase search-links"
                    button-title="Share this page"
                  >
                    <FontAwesomeIcon icon="share-alt" />
                    Share
                  </Clipboard>
                </div>
              )}

              <div className="se-table-container">
                <Table className="se-table">
                  <thead>
                    <tr>
                      {headers.map((header) => {
                        const { title, field } = header;
                        return <th key={field}>{title}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {SDNList.map((entity, i) => {
                      let item = entity.item;
                      return (
                        <tr key={i} className={item.inactive ? 'inactive' : ''}>
                          {headers.map((col, j) => {
                            if (j === 0) {
                              return <td key={j}>{item[col.field]}</td>;
                            }
                            if (
                              col.title === 'Type' &&
                              item[col.field] === 'Entity'
                            ) {
                              return <td key={j}>Organization</td>;
                            }
                            if (typeof item[col.field] === 'boolean') {
                              return (
                                <td key={j}>
                                  {item[col.field] ? 'Yes' : 'No'}
                                </td>
                              );
                            }
                            if (col.field === 'Active Sanctions') {
                              return <td key={j}>Yes</td>;
                            }
                            if (col.field === 'Authority') {
                              return <td key={j}>OFAC</td>;
                            } else if (
                              col.field === 'programList' &&
                              item[col.field].program.length > 0
                            ) {
                              return (
                                <td key={j}>{item[col.field].program[0]}</td>
                              );
                            } else {
                              return <td key={j}>{item[col.field]}</td>;
                            }
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <Footer />
            </main>
          </Col>
        </Row>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
}

export default Search;
