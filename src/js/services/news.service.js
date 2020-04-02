const newsService = (function() {
  const apiKey = 'ba8620836f104b76bbdaad87e85482d0';
  const apiUrl = 'https://newsapi.org/v2';

  return {
    async topHeadlines(country = 'ua') {
      try {
        const response = await fetch(
          `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`
        );
        const data = await response.json();
        
        return data;
      } catch (err) {
        console.log(err);
        return Promise.reject(err);
      }
    },
    async everything(query) {
      try {
        const response = await fetch(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`);
        const data = await response.json();
        
        return data;
      } catch (err) {
        console.log(err);
        return Promise.reject(err);
      }
    },
  };
})();

export default newsService;