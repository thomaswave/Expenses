const express = require("express");

const {
  getExpenses,
  getExpensesById,
  createExpenses,
  updateExpenses,
  deleteExpense
} = require("../controllers/expenses");

const router = express.Router();

router.get("/", getExpenses);
router.get("/:id", getExpensesById);
router.post("/", createExpenses);
router.put("/", updateExpenses);
router.delete("/:id", deleteExpense);

module.exports = router;
