import dotenv from "dotenv";
const swaggerJsdoc = require('swagger-jsdoc');
dotenv.config();

export const mySQLConfig = {
    host: process.env.host,
    user: process.env.user, database: "learnsql",
    password: process.env.password
}
const openApiDOcs = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'My API description',
        },
    },
    // Path to the API docs
    apis: [ '**/routes/*.ts'],
};

export const swaggerSpecs = swaggerJsdoc(openApiDOcs);

const initDB = () => {
    const initDB = "CREATE DATABASE learnSQL";
    const initUsersTable = `
    CREATE TABLE USERS (
    id int,
    secondName varchar(255),
    firstName varchar(255),
    email varchar(255),
    password varchar(255)
);`

    const initTodosTable = `
    CREATE TABLE TODOS (
    id int,
    title varchar(255),
    description text(1000),
    status enum("created", "inProgress", "done")
    )`
}