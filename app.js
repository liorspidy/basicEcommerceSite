import data from './data.json' assert { type: 'json' };

const sites = document.createElement('div');
sites.classList.add('sites');
document.body.appendChild(sites);

const getSubData = (json) => {
  return json.map((data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const ul = document.createElement('ul');
    ul.classList.add('ul');
    card.append(ul);
    sites.appendChild(card);
    ul.appendChild(createCard(data));
  });
};

const createCard = (data) => {
  const li = document.createElement('li');
  li.classList.add('site');

  const div = document.createElement('div');
  li.appendChild(div);

  const id = document.createElement('div');
  id.classList.add('id');
  id.textContent = 'id: ' + data.id;

  const siteName = document.createElement('h3');
  siteName.classList.add('siteName');
  siteName.textContent = 'Site Name: ' + data.name;

  const siteUrl = document.createElement('div');
  siteUrl.classList.add('siteUrl');

  const url = document.createElement('a');
  url.classList.add('url');
  url.setAttribute('href', 'https://' + data.url);
  url.setAttribute('target', '_blank');
  url.setAttribute('rel', 'noreferrer');
  url.textContent = 'Site Url: ' + data.url;

  siteUrl.appendChild(url);

  const subData = document.createElement('div');
  subData.classList.add('subData');

  div.appendChild(id);
  div.appendChild(siteName);
  div.appendChild(siteUrl);
  div.appendChild(subData);

  if (data.subData) {
    data.subData.map((newData) => {
      subData.appendChild(createCard(newData));
    });
  }

  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'show more sites';
  li.appendChild(button);

  const showSites = () => {
    subData.classList.toggle('visible');
  };
  button.addEventListener('click', showSites);

  return li;
};

getSubData(data);
