import {IncomingMessage, ServerResponse} from "http";
import {mainPageController} from "../controllers";
import {routeNormalizer} from "../utils/routeNormalizer";

type RouterParams = {
    request: IncomingMessage,
    response:ServerResponse
}

const router = ({response, request}:RouterParams) => {
    // Нормалайзер необходим для того, чтобы
    const url = routeNormalizer(request.url ?? "")
    switch (url){
        case "/": {
           return mainPageController(request, response)
        }
        default: {
            response.end("Not found");
        }
    }
}

export default router;