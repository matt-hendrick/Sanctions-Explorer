import React, { useState, useEffect } from 'react';
import './Search.css';
import axios from 'axios';

// Components
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

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
      <div>
        <Sidebar />
        <div>
          {SDNList
            ? SDNList.entities.map((item) => {
                return <div>{item.item.lastName}</div>;
              })
            : null}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Search;
