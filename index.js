const express = require("express");
const expensesRouter = require("./routes/expenses");

const app = express();
app.use(express.json());

app.use("/api/expenses", expensesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});
