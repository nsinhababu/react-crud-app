import './styles.css';
import React, { useEffect, useState } from 'react';

// Import components
import Table from '../../Components/Table';
import EmptyState from '../../Components/EmptyState';
// Import utils
import { fetchRecords } from './api';

const Records = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecords = async (randomNumber) => {
    try {
      const data = await fetchRecords(randomNumber);
      setIsLoading(false);
      const { name, mass } = data || {};
      const id = name + mass;
      data.id = id;
      setRecords([...records, data]);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return (
    <div className='wrapper'>
      <div>
        <button
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            const randomNumber = Math.ceil(Math.random() * 10);
            getRecords(randomNumber);
          }}
        >
          Add Record
        </button>
      </div>
      {!records?.length ? (
        <>
          <EmptyState />
        </>
      ) : (
        <Table records={records} setRecords={setRecords} />
      )}
    </div>
  );
};

export default React.memo(Records);
