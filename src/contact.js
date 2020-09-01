export const contact = () => {
  const conatctinfo = document.createElement("div");
  conatctinfo.className = "conatctinfo";
  conatctinfo.id = "conatctinfo";

  const email = document.createElement("h2");
  email.className = "email";
  email.innerHTML = "email : example@gmail.com";
  conatctinfo.appendChild(email);

  const phone_number = document.createElement("h2");
  phone_number.className = "phonenumber";
  phone_number.innerHTML = "Phone Number : +2126666666";
  conatctinfo.appendChild(phone_number);

  const location = document.createElement("h2");
  location.className = "location";
  location.innerHTML = "Location : Morocco Fez";
  conatctinfo.appendChild(location);

  return conatctinfo;
};
