import swaggerUi from "swagger-ui-express";
import {swaggerSpecs} from "../configs";

import {Router} from "express";
const swaggerRouter = Router();
swaggerRouter.use("/",  swaggerUi.serve)
swaggerRouter.use("/", (request, response, next) => {
    swaggerUi.setup(swaggerSpecs)(request, response, next);
})

export default swaggerRouter