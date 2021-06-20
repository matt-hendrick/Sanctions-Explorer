import React, { useState, useEffect } from 'react';
import './Search.css';
import axios from 'axios';

// Components
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

function Search() {
  const [SDNList, setSDNList] = useState();

  useEffect(() => {
    axios
      .get('https://us-central1-sanctionsexplorer.cloudfunctions.net/api/SDN')
      .then((res) => {
        console.log(res.data);
        setSDNList(res.data);
      })
      .catch((err) => console.error(err?.response?.data));
  });

  return (
    <div>
      {SDNList ? (
        <div>
          <Sidebar />
          <div>
            {SDNList.entities.map((item) => {
              return <div>{item.item.lastName}</div>;
            })}
            <Footer />
          </div>
        </div>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
}

export default Search;
