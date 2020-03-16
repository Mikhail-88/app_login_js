function renderNews(news) {
  const newsContainer = document.querySelector('.login-page-wrapp');

  let fragment = '';

  news.forEach(newsItem => {
    const element = newsTemplate(newsItem);
    fragment += element;
  });

  newsContainer.insertAdjacentHTML('beforeend', `
    <div class="container">${fragment}</div>
  `);
}

function newsTemplate(oneNews) {
  const { urlToImage, title, url, description } = oneNews;
  const noImage = './image/image-not-found-big-300x169.png';

  return `
    <div class="card" style="width: 18rem;">
      <img src="${urlToImage || noImage}" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${title || ''}</h5>
        <p class="card-text">${description || ''}</p>
      <a href="${url}" class="btn btn-primary">Read more</a>
      </div>
    </div>
  `;
}

export default renderNews;