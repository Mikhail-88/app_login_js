function renderNews(news) {
  const newsContainer = document.querySelector('.news-container');

  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }

  let fragment = '';

  news.forEach(newsItem => {
    const element = newsTemplate(newsItem);
    fragment += element;
  });

  newsContainer.insertAdjacentHTML('beforeend', `
    <div class="news_wrapper">${fragment}</div>
  `);
}

function clearContainer(container) {
  let child = container.lastElementChild;

  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

function newsTemplate(oneNews) {
  const { urlToImage, title, url, description } = oneNews;
  const noImage = 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';

  return `
    <div class="card">
      <img src="${urlToImage || noImage}" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${title || ''}</h5>
        <p class="card-text">${description || ''}</p>
      <a href="${url}" class="btn btn-info" target="_blank">Read more</a>
      </div>
    </div>
  `;
}

export default renderNews;