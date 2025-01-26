-- Create Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Budgets table
CREATE TABLE Budgets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    month DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create Expenses table
CREATE TABLE Expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create Investments table
CREATE TABLE Investments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create index on user_id for faster queries
CREATE INDEX idx_user_id ON Budgets(user_id);
CREATE INDEX idx_user_id ON Expenses(user_id);
CREATE INDEX idx_user_id ON Investments(user_id);