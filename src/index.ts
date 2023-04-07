import mysql from "mysql2";
import express from "express";
import dotenv from "dotenv";
import {mySQLConfig, swaggerSpecs} from "./configs";
import router from "./routes";
import errorMiddleware from "./middlewares";

dotenv.config();
export const app = express();
export const sqlConnection = mysql.createConnection(mySQLConfig)

sqlConnection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

app.use("/", router)

app.use(errorMiddleware)

app.listen(3001, () => {return console.info(`LISTENING AT ${process.env.port}`)})

