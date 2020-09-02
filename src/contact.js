const contact = () => {
  const conatctinfo = document.createElement('div');
  conatctinfo.className = 'conatctinfo';
  conatctinfo.id = 'conatctinfo';

  const email = document.createElement('h2');
  email.className = 'email';
  email.innerHTML = 'email : example@gmail.com';
  conatctinfo.appendChild(email);

  const phoneNumber = document.createElement('h2');
  phoneNumber.className = 'phonenumber';
  phoneNumber.innerHTML = 'Phone Number : +2126666666';
  conatctinfo.appendChild(phoneNumber);

  const location = document.createElement('h2');
  location.className = 'location';
  location.innerHTML = 'Location : Morocco Fez';
  conatctinfo.appendChild(location);

  return conatctinfo;
};
export default contact;
