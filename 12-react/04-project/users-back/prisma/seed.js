import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addUsers() {
  const users = [
    { name: "Aaron", email: "aaron@mail.com", age: 50 },
    { name: "Bella", email: "bella@mail.com", age: 53 },
    { name: "Chloe", email: "chloe@mail.com", age: 51 },
    { name: "Daisy", email: "daisy@mail.com", age: 58 },
    { name: "Elijah", email: "elijah@mail.com", age: 21 },
    { name: "Freya", email: "freya@mail.com", age: 28 },
    { name: "George", email: "george@mail.com", age: 34 },
    { name: "Hugo", email: "hugo@mail.com", age: 40 },
    { name: "Isaac", email: "isaac@mail.com", age: 60 },
    { name: "Justin", email: "justin@mail.com", age: 48 },
    { name: "Kevin", email: "kevin@mail.com", age: 53 },
    { name: "Luna", email: "luna@mail.com", age: 22 },
    { name: "Matthew", email: "matthew@mail.com", age: 32 },
    { name: "Nina", email: "nina@mail.com", age: 24 },
    { name: "Oliver", email: "oliver@mail.com", age: 46 },
    { name: "Paul", email: "paul@mail.com", age: 32 },
    { name: "Queen", email: "queen@mail.com", age: 54 },
    { name: "Rose", email: "rose@mail.com", age: 39 },
    { name: "Sophie", email: "sophie@mail.com", age: 60 },
    { name: "Tobias", email: "tobias@mail.com", age: 53 },
    { name: "Ulysses", email: "ulysses@mail.com", age: 33 },
    { name: "Valerie", email: "valerie@mail.com", age: 38 },
    { name: "Wanda", email: "wanda@mail.com", age: 28 },
    { name: "Xavier", email: "xavier@mail.com", age: 47 },
    { name: "Yasmin", email: "yasmin@mail.com", age: 30 },
    { name: "Zoe", email: "zoe@mail.com", age: 101 }
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: { name: user.name, age: user.age },
      create: user
    });
  }
}

addUsers()
  .then(() => console.log("Users added/updated successfully."))
  .catch(error => console.error("Error seeding users:", error))
  .finally(async () => await prisma.$disconnect());
