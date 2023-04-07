import {Router} from "express";
import {todosController} from "../controllers";

const todosRouter = Router()

/**
 * @swagger
 * /todos:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *         content:
 *          application/json:
 *           schema:
 *           type: object
 *
 *
 *
 *
 */
todosRouter.get("/", todosController)

export default todosRouter;
