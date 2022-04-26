import axios from 'axios';
const BASE_URL = 'https://swapi.dev/api/people';

// Custom get method | Add query params if needed
const getMethod = (url) => {
  return axios.get(`${BASE_URL}/${url ? url : ''}`).then((res) => {
    const data = res.data;
    return data;
  });
};

// const deleteMethod = () => {
//   axios.delete(`${BASE_URL}/${url}`).then((res) => {
//     const data = res.data;
//     return data;
//   });
// };
export { getMethod };
