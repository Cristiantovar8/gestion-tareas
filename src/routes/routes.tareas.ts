import {Request, Response, Router} from "express";

const router = Router();

/**
 * http://localhost:3000/tareas [GET]
 */
router.get('/tareas', (req: Request, res: Response) => {
    res.send({data: "TEST_RESPUESTA"})

})

export {router};