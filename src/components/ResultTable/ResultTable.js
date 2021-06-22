import React from 'react';
import './ResultTable.scss';
import ReactToPrint from 'react-to-print';
import Clipboard from 'react-clipboard.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

// Components
import Footer from '../../components/Footer/Footer';

const headers = [
  { title: 'Entity Name', field: 'lastName' },
  { title: 'Type', field: 'sdnType' },
  { title: 'Authority', field: 'Authority' },
  { title: 'Current Programs', field: 'programList' },
  { title: 'Active Sanctions', field: 'Active Sanctions' },
];

function ResultTable(props) {
  return (
    <Col className="pr-0 pl-0" md={{ size: 9, order: 2 }}>
      <main className="content">
        <div className="content-title d-flex">
          <h1>
            Results <span>({props.nbHits})</span>
          </h1>
        </div>
        {props.nbHits > 0 && props.hits ? (
          <React.Fragment>
            <div className="actions d-flex ml-auto justify-content-end">
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
                  {props.hits.map((item, i) => {
                    return (
                      <tr key={i}>
                        {headers.map((col, j) => {
                          if (col.field === 'lastName' && item['firstName']) {
                            return (
                              <td
                                key={j}
                              >{`${item['firstName']} ${item['lastName']}`}</td>
                            );
                          }
                          if (
                            col.title === 'Type' &&
                            item[col.field] === 'Entity'
                          ) {
                            return <td key={j}>Organization</td>;
                          }
                          if (typeof item[col.field] === 'boolean') {
                            return (
                              <td key={j}>{item[col.field] ? 'Yes' : 'No'}</td>
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
          </React.Fragment>
        ) : (
          <div className="se-table-container">
            <div className="notfound">Enter a search term to view results</div>
          </div>
        )}
        <Footer />
      </main>
    </Col>
  );
}

export default ResultTable;
