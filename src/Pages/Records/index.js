import React, { useEffect, useState } from 'react';

// Import components
import Table from '../../Components/Table';
import EmptyState from '../../Components/EmptyState';
// Import utils
import { fetchRecords } from './api';

const Records = () => {
  const [records, setRecords] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  const getRecords = async () => {
    try {
      const data = await fetchRecords(randomNumber);
      setRecords([...records, data]);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(records);

  useEffect(() => {
    getRecords();
  }, [randomNumber]);

  return (
    <>
      <button
        onClick={() => {
          const count = Math.ceil(Math.random() * 10);
          setRandomNumber(count);
        }}
      >
        Add Record
      </button>
      {!records?.length ? (
        <>
          <EmptyState />
        </>
      ) : (
        <Table records={records} />
      )}
    </>
  );
};

export default React.memo(Records);
