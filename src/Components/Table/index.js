import { useState } from 'react';
import Modal from '../Modal';
const Table = ({ records, setRecords }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recordId, setRecordId] = useState('');
  console.log(records);

  // console.log(records);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {records?.map((record) => {
            return (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>
                  <button
                    onClick={() => {
                      setRecordId(record.id);
                      setIsOpen(!isOpen);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal isOpen={isOpen}>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setRecords(records.filter((record) => record.id !== recordId));
          }}
        >
          Confirm
        </button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Modal>
    </>
  );
};

export default Table;
