import renderNews from '../helpers/renderNews';

async function getNews() {
  const apiKey = 'ba8620836f104b76bbdaad87e85482d0';
  const apiUrl = 'https://newsapi.org/v2';

  try {
    const response = await fetch(`${apiUrl}/top-headlines?country=ua&category=technology&apiKey=${apiKey}`);
    const data = await response.json();
    
    renderNews(data.articles);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export default getNews;