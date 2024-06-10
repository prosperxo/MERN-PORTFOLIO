import React, { useState } from 'react';
import StaffRow from '../components/StaffRow';


const StaffPage = () => {
  const [results, setResults] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => setResults(data.results))
      .catch(error => alert("API server is down. Please try again later."));
  };

  return (
    <div>
      <h2>Staff Directory</h2>
      <article>
        <p>Welcome to the staff directory page. Click the button below to fetch and display staff information.</p>
        <button onClick={fetchData}>Load Staff Data</button>
        {results.length > 0 && (
          <table>
            <caption>Staff List</caption>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Timezone</th>
              </tr>
            </thead>
            <tbody>
              {results.map((staff, index) => (
                <StaffRow key={index} staff={staff} />
              ))}
            </tbody>
          </table>
        )}
      </article>
    </div>
  );
};

export default StaffPage;
