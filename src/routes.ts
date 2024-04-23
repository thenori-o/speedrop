import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/authenticate/', authenticateClientController.handle);
routes.post('/client/', createClientController.handle);

export { routes }