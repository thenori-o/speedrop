import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./createDeliverymanUseCase";

export class CreateDeliverymanController {
  
  async handle(request: Request, response: Response) {
    const data = request.body;
    
    const createClientUseCase = new CreateDeliverymanUseCase();
    const result = await createClientUseCase.execute(data);

    return response.json(result);
  }

}