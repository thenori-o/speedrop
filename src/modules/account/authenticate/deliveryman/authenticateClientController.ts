import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./authenticateClientUseCase";

export class AuthenticateDeliverymanController {
  
  async handle(request: Request, response: Response) {
    const data = request.body;
    
    const authenticateClientUseCase = new AuthenticateDeliverymanUseCase();
    const result = await authenticateClientUseCase.execute(data);

    return response.json(result);
  }

}