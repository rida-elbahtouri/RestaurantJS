import Navbar from './navbar';
import contact from './contact';
import menu from './menu';
import home from './home';

const root = document.getElementById('content');
const navbar = Navbar();
root.appendChild(navbar);
const links = document.querySelectorAll('.link');

const page = document.createElement('div');
page.className = 'page';
page.id = 'page';

page.appendChild(home());
root.appendChild(page);
/* eslint consistent-return: 0 */
const roting = (link) => {
  if (link === 'contact') {
    page.className = 'page';
    return contact();
  }
  if (link === 'home') {
    page.className = 'page';
    return home();
  }
  if (link === 'menu') {
    page.className = 'menupage';

    return menu();
  }
};
links.forEach((li) => {
  li.addEventListener('click', (e, id = li.id) => {
    const element = roting(id);
    page.innerHTML = '';
    page.appendChild(element);
  });
});
