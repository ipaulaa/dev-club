const user = {
  name: "Xavier",
  email: "xavier@example.com",
  phone: "+1-555-012-4567"
};

for (const key in user) {
  console.log(key, user[key]);
}
