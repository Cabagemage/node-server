import {IncomingMessage, ServerResponse} from "http";

const data = [{
    name: "Andrey",
    secondName: "Zaitsev"
}]

export const mainPageController = (request: IncomingMessage, response:ServerResponse) => {
    response.end(JSON.stringify(data))
}