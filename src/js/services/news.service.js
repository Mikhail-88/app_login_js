import axios from '../plugins/axios';

async function getNews() {
  try {
    const response = await axios.get(`/news`);
    
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export default getNews;