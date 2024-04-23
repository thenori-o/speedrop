import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "./modules/account/authenticate/client/authenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticate/deliveryman/authenticateClientController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post('/client/authenticate', authenticateClientController.handle);
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);
routes.post('/client/', createClientController.handle);
routes.post('/deliveryman/', createDeliverymanController.handle);

export { routes }