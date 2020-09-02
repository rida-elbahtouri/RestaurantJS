const home = () => {
  const title = document.createElement('h1');
  title.className = 'title';
  title.innerHTML = 'Hello and welcome to my restaurant';
  title.id = 'title';
  return title;
};
export default home;
