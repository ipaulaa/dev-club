import { PrismaClient } from "@prisma/client";
import express from "express";

const PORT = 3000;

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

app.post("/users", async (req, res) => {
  const { email, name, age } = req.body;
  const user = await prisma.user.create({
    data: { email, name, age }
  });
  res.status(201).json(user);
});

app.put("/users/:id", async (req, res) => {
  const { email, name, age } = req.body;
  const { id } = req.params;
  const user = await prisma.user.update({
    where: { id },
    data: { email, name, age }
  });
  res.status(200).json(user);
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id }
  });
  res.status(200).json({ message: "User successfully deleted." });
});

app.listen(PORT, () =>
  console.log(`🚀 Server is up and running @ http://localhost:${PORT}`)
);
