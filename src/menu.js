const list = [
  {
    name: 'Pizza',
    img: 'assets/images/pizza.jpg',
    desc: 'our pizza is the best in the city',
  },
  {
    name: 'Soup',
    img: 'assets/images/soup.jpg',
    desc: 'our soup is the best in the city',
  },
  {
    name: 'Salad',
    img: 'assets/images/salad.jpg',
    desc: 'our salad is the best in the city',
  },
  {
    name: 'Chekin',
    img: 'assets/images/chekin.jpg',
    desc: 'our chekin is the best in the city',
  },
];
const createcard = (item) => {
  const container = document.createElement('div');
  container.className = 'card';
  container.id = 'menucards';

  const img = document.createElement('img');
  img.src = item.img;
  img.className = 'foodimg';
  container.appendChild(img);

  const name = document.createElement('h3');
  name.innerHTML = item.name;
  name.className = 'foodname';
  container.appendChild(name);

  const desc = document.createElement('p');
  desc.innerHTML = item.desc;
  desc.className = 'fooddesc';
  container.appendChild(desc);

  return container;
};
const menu = () => {
  const foodlist = document.createElement('div');
  foodlist.className = 'foodlist';
  foodlist.id = 'foodlist';

  const foodlisttitle = document.createElement('h1');
  foodlisttitle.className = 'foodlist_title';
  foodlisttitle.innerHTML = 'our list of today :';
  foodlisttitle.id = 'foodlisttitle';
  foodlist.appendChild(foodlisttitle);
  list.forEach((item) => {
    foodlist.appendChild(createcard(item));
  });

  return foodlist;
};
export default menu;
