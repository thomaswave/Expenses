const connection = require("../db/connection");

const expenses = {
  findAll: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM expenses", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  findById: (id) =>
    new Promise((resolve, reject) => {
      const selectQuery = "SELECT * FROM expenses WHERE id=?;";
      connection.query(selectQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),

  save: (expense) =>
    new Promise((resolve, reject) => {
      connection.query("INSERT INTO expenses SET ?", expense, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),

  updateById: (expense) =>
    new Promise((resolve, reject) => {
      const updateQuery =
        "UPDATE expenses SET date = ?, amount = ?, shop = ?, category = ? WHERE id = ?;";
      connection.query(
        updateQuery,
        [
          expense.date,
          expense.amount,
          expense.shop,
          expense.category,
          expense.id,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),

  deleteById: (id) =>
    new Promise((resolve, reject) => {
      const deleteQuery = "DELETE FROM expenses WHERE id=?;";
      connection.query(deleteQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
};

module.exports = expenses;
