-- Create the database
CREATE DATABASE food_tracker_database;

-- Switch to the new database
USE food_tracker_database;

-- Create the Users_Basic_Information Table
CREATE TABLE Users_Basic_Information (
    user_id INT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME,
    updated_at DATETIME
);

-- Create the Foods_Basic_Information Table
CREATE TABLE Foods_Basic_Information (
    food_id INT PRIMARY KEY,
    food_name VARCHAR(100),
    food_image_path VARCHAR(255),
    quantity DECIMAL(10, 2),
    food_type VARCHAR(100),
    unit VARCHAR(50),
    expiration_date DATE,
    created_at DATETIME,
    created_by INT,
    updated_at DATETIME,
    is_purchased BOOLEAN,
    purchased_at DATETIME,
    FOREIGN KEY (created_by) REFERENCES Users_Basic_Information(user_id) ON DELETE CASCADE
);

-- Create the Receipts_Basic_Information Table
CREATE TABLE Receipts_Basic_Information (
    receipt_id INT PRIMARY KEY,
    receipt_name VARCHAR(100),
    receipt_image_url VARCHAR(255),
    tags VARCHAR(255),
    receipt_description_key VARCHAR(255),
    created_by INT,
    created_at DATETIME,
    FOREIGN KEY (created_by) REFERENCES Users_Basic_Information(user_id) ON DELETE CASCADE
);

-- Create the User’s Favorite Recipes Table
CREATE TABLE User_Favorite_Recipes (
    user_id INT,
    receipt_id INT,
    PRIMARY KEY (user_id, receipt_id),
    FOREIGN KEY (user_id) REFERENCES Users_Basic_Information(user_id) ON DELETE CASCADE,
    FOREIGN KEY (receipt_id) REFERENCES Receipts_Basic_Information(receipt_id) ON DELETE CASCADE
);

-- Create the User’s Replied message Table
CREATE TABLE User_Replied_Message (
    message_id INT PRIMARY KEY,
    created_by INT,
    recipe_get_replied INT,
    message_get_replied INT,
    message_content TEXT,
    FOREIGN KEY (created_by) REFERENCES Users_Basic_Information(user_id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_get_replied) REFERENCES Receipts_Basic_Information(receipt_id) ON DELETE CASCADE,
    FOREIGN KEY (message_get_replied) REFERENCES User_Replied_Message(message_id) ON DELETE CASCADE
);