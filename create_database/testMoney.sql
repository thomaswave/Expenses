CREATE DATABASE expensesdb;

USE expensesdb;

CREATE TABLE IF NOT EXISTS expenses (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `date` DATE,
    `amount`DECIMAL NOT NULL,
    `shop` VARCHAR(50),
    `category` VARCHAR(50),
    PRIMARY KEY(id)
);

INSERT INTO `expenses` (`id`, `date`, `amount`, `shop`, `category`)
VALUES (1, '2022-12-24', '200.80', 'Restaurant', 'Dinner');
INSERT INTO `expenses` (`id`, `date`, `amount`, `shop`, `category`)
VALUES (2, '2022-12-25', '130.00', 'Restaurant', 'Dinner');
INSERT INTO `expenses` (`id`, `date`, `amount`, `shop`, `category`)
VALUES (3, '2022-12-31', '160.00', 'Restaurant', 'Dinner');
INSERT INTO `expenses` (`id`, `date`, `amount`, `shop`, `category`)
VALUES (4, '2023-01-04', '10.00', 'Mogan Mall', 'Clothes');
