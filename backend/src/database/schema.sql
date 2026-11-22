CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todos (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO todos (title) 
VALUES ('Learn TypeScript');

INSERT INTO todos (title) 
VALUES ('Learn TypeScript');

INSERT INTO todos (title, completed, created_at, updated_at) 
VALUES ('Learn TypeScript', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);