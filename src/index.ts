import {ServerResponse, createServer, IncomingMessage} from "http"
import router from "./router";

createServer((request: IncomingMessage, response:ServerResponse) => {
    router({response, request})
    response.end()
}).listen(3000);