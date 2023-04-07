import {Router} from "express";
import HttpException from "../utils/errors/HttpException";
import todosRouter from "./todosRouter";
import swaggerRouter from "./swagger";

const router = Router();

router.use("/api-docs", swaggerRouter);
router.use("/todos", todosRouter);
router.use('*', (req, res, next) => {
    const error = new HttpException(404, "Не найдено");
    next(error);
});

// const router = ({response, request}:RouterParams) => {
//     // Нормалайзер необходим для того, чтобы
//     const next = () => {
//         return;
//     }
//     const url = routeNormalizer(request.url ?? "")
//     switch (url){
//         case "/": {
//            return todosController(request, response)
//         }
//         case "/api-docs":{
//             swaggerUi.setup(swaggerSpecs)(request, response, () => {return response});
//         }
//         default: {
//             response.end("Not found");
//         }
//     }
//     response.end();
// }
//
// export default router;

export default router;