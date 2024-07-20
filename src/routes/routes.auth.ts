import {Router} from "express";
import { registrar, login } from "../controllers/auth.controller"

const routerAuth = Router();

routerAuth.post('/registrar/', registrar);

routerAuth.post('/login/', login);

export {routerAuth};