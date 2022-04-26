import './styles.css';
import React, { useState } from 'react';

// Import components
import Table from '../../Components/Table';
import EmptyState from '../../Components/EmptyState';
import Loader from '../../Components/Loader';
// Import utils
import { fetchRecords } from './api';

const Records = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getRecords = async (randomNumber) => {
    try {
      const data = await fetchRecords(randomNumber);
      setIsLoading(false);
      const id = Date.now();
      data.id = id;
      setRecords([...records, data]);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className='wrapper'>
        <div>
          <h2>Star Wars</h2>
          <button
            className='add-record'
            disabled={isLoading || isOpen}
            onClick={() => {
              setIsLoading(true);
              const randomNumber = Math.ceil(Math.random() * 10);
              getRecords(randomNumber);
            }}
          >
            Add Record
          </button>
        </div>
        {!records?.length && !isLoading ? (
          <>
            <EmptyState />
          </>
        ) : (
          <Table
            records={records}
            setRecords={setRecords}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
};

export default React.memo(Records);
