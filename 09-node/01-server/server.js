import express from "express";

const PORT = 3000;

const app = express();
app.use(express.json());

const users_db = [];
app.get("/users", (req, res) => {
  res.status(200).json(users_db);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users_db.find(user => user.id === Number(id));
  if (user) res.status(200).json(user);
  else res.status(404).send({ message: `User with ID<${id}> wasn't found` });
});

app.post("/users", (req, res) => {
  users_db.push(req.body);
  res.status(201).json({ message: "Successfully created user" });
});

app.listen(PORT, () =>
  console.log(`🚀 Server is up and running @ http://localhost:${PORT}`)
);
