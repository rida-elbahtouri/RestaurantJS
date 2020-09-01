const list = [
  {
    name: "Pizza",
    img: "assets/images/pizza.jpg",
    desc: "our pizza is the best in the city",
  },
  {
    name: "Soup",
    img: "assets/images/soup.jpg",
    desc: "our soup is the best in the city",
  },
  {
    name: "Salad",
    img: "assets/images/salad.jpg",
    desc: "our salad is the best in the city",
  },
  {
    name: "Chekin",
    img: "assets/images/chekin.jpg",
    desc: "our chekin is the best in the city",
  },
];
const createcard = (item) => {
  const container = document.createElement("div");
  container.className = "card";
  container.id = "menucards";

  const img = document.createElement("img");
  img.src = item.img;
  img.className = "foodimg";
  container.appendChild(img);

  const name = document.createElement("h3");
  name.innerHTML = item.name;
  name.className = "foodname";
  container.appendChild(name);

  const desc = document.createElement("p");
  desc.innerHTML = item.desc;
  desc.className = "fooddesc";
  container.appendChild(desc);

  return container;
};
export const menu = () => {
  const foodlist = document.createElement("div");
  foodlist.className = "foodlist";
  foodlist.id = "foodlist";

  const foodlist_title = document.createElement("h1");
  foodlist_title.className = "foodlist_title";
  foodlist_title.innerHTML = "our list of today :";
  foodlist_title.id = "foodlist_title";
  foodlist.appendChild(foodlist_title);
  list.forEach((item) => {
    foodlist.appendChild(createcard(item));
  });

  return foodlist;
};
