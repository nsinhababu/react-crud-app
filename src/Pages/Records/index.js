import { useEffect, useState, useMemo } from 'react';

// Import components
import Table from '../../Components/Table';

// Import utils
import { fetchRecords } from './api';

const Records = () => {
  const [records, setRecords] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  const getRecords = async () => {
    try {
      const data = await fetchRecords(randomNumber);
      if (data) {
        console.log(data);
        setRecords([...records, data]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(records);

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
      <Table />
    </>
  );
};

export default Records;
