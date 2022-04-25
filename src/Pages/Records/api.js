import { getMethod } from '../../fetch-api';

// const { getMethod } = fetchData();
const fetchRecords = (count) => {
  return getMethod(count);
};

// const deleteRecords = () => {
//   return fetchData.deleteMethod({ id });
// };

export { fetchRecords };
