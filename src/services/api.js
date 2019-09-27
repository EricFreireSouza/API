import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.reddit.com/r/reactjs',
});

// const api = fetch('https://rocketseat-node.herokuapp.com/api');

export default api;
