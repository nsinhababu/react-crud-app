import { getMethod } from '../../fetchWrapper';

const fetchRecords = (count) => {
  return getMethod(count);
};

// const deleteRecords = () => {
//   return fetchData.deleteMethod({ id });
// };

export { fetchRecords };
