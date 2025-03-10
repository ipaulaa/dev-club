const user = {
  user: {
    id: 12345,
    username: "paula_rodrigues",
    email: "paula@example.com",
    profile: {
      firstName: "Paula",
      lastName: "Rodrigues",
      age: 28,
      bio: null
    },
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        push: false,
        sms: null
      }
    },
    security: {
      twoFactorAuth: true,
      lastLogin: "2025-02-08T12:34:56Z"
    }
  }
};

const userJSON = JSON.stringify(user);
const userJS = JSON.parse(userJSON);
console.log(userJSON);
console.log(userJS);
