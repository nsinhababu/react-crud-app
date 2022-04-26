const Table = ({ records }) => {
  // console.log(records);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        {records?.map(({ name, created, birth_year }) => {
          return (
            <tr key={`${name}${birth_year}`}>
              <td>{name}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
