const users = [
  {
    name: "Aaron",
    email: "aaron@example.com",
    phone: "+1-555-010-1234"
  },
  {
    name: "Bella",
    email: "bella@example.com",
    phone: "+1-555-010-2345"
  },
  {
    name: "Chloe",
    email: "chloe@example.com",
    phone: "+1-555-010-3456"
  },
  {
    name: "Daisy",
    email: "daisy@example.com",
    phone: "+1-555-010-4567"
  },
  {
    name: "Elijah",
    email: "elijah@example.com",
    phone: "+1-555-010-5678"
  },
  {
    name: "Freya",
    email: "freya@example.com",
    phone: "+1-555-010-6789"
  },
  {
    name: "George",
    email: "george@example.com",
    phone: "+1-555-010-7890"
  },
  {
    name: "Hugo",
    email: "hugo@example.com",
    phone: "+1-555-010-8901"
  },
  {
    name: "Isaac",
    email: "isaac@example.com",
    phone: "+1-555-010-9012"
  },
  {
    name: "Justin",
    email: "justin@example.com",
    phone: "+1-555-011-0123"
  },
  {
    name: "Kevin",
    email: "kevin@example.com",
    phone: "+1-555-011-1234"
  },
  {
    name: "Luna",
    email: "luna@example.com",
    phone: "+1-555-011-2345"
  },
  {
    name: "Matthew",
    email: "matthew@example.com",
    phone: "+1-555-011-3456"
  },
  {
    name: "Nina",
    email: "nina@example.com",
    phone: "+1-555-011-4567"
  },
  {
    name: "Oliver",
    email: "oliver@example.com",
    phone: "+1-555-011-5678"
  },
  {
    name: "Paul",
    email: "paul@example.com",
    phone: "+1-555-011-6789"
  },
  {
    name: "Queen",
    email: "queen@example.com",
    phone: "+1-555-011-7890"
  },
  {
    name: "Rose",
    email: "rose@example.com",
    phone: "+1-555-011-8901"
  },
  {
    name: "Sophia",
    email: "sophia@example.com",
    phone: "+1-555-011-9012"
  },
  {
    name: "Tobias",
    email: "tobias@example.com",
    phone: "+1-555-012-0123"
  },
  {
    name: "Ulysses",
    email: "ulysses@example.com",
    phone: "+1-555-012-1234"
  },
  {
    name: "Valerie",
    email: "valerie@example.com",
    phone: "+1-555-012-2345"
  },
  {
    name: "Wanda",
    email: "wanda@example.com",
    phone: "+1-555-012-3456"
  },
  {
    name: "Xavier",
    email: "xavier@example.com",
    phone: "+1-555-012-4567"
  },
  {
    name: "Yasmin",
    email: "yasmin@example.com",
    phone: "+1-555-012-5678"
  },
  {
    name: "Zoe",
    email: "zoe@example.com",
    phone: "+1-555-012-6789"
  }
];

const userList = document.getElementById("user-list");
for (let i = 0; i < users.length; i++) {
  userList.innerHTML += `<li>${users[i].name}</li>`;
}

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const inputName = document.getElementById("input-name");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  const searchName = inputName.value;
  inputName.value = "";

  for (let i = 0; i < users.length; i++) {
    if (searchName.toLowerCase() === users[i].name.toLowerCase()) {
      name.textContent = users[i].name;
      email.textContent = users[i].email;
      phone.textContent = users[i].phone;
      break;
    } else {
      name.textContent = "User Not Found";
      email.textContent = "";
      phone.textContent = "";
    }
  }
});
