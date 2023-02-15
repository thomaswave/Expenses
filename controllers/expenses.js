const expenses = require("../models/expenses");

const getExpenses = async (req, res) => {
  const response = await expenses.findAll();
  if (response) {
    res.send(response);
  }
};

const getExpensesById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await expenses.findById(id);
  if (response) {
    res.send(response);
  }
};

const createExpenses = async (req, res) => {
  const expense = {
    date: req.body.date,
    amount: req.body.amount,
    shop: req.body.shop,
    category: req.body.category,
  };
  const response = await expenses.save(expense);
  if (response) {
    expense.id = response.insertId;
    res.send(expense);
  }
};

const updateExpenses = async (req, res) => {
  const expense = {
    id: req.body.id,
    amount: req.body.amount,
    date: req.body.date,
    shop: req.body.shop,
    category: req.body.category
  };
  const response = await expenses.updateById(expense);
  if (response) {
    res.send(expense);
  }
};

const deleteExpense = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await expenses.deleteById(id);
  if (response) {
    res.send("Expense deleted");
  }
};

module.exports = {
  getExpenses,
  getExpensesById,
  createExpenses,
  updateExpenses,
  deleteExpense
};
