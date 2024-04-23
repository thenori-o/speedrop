import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController {
  
  async handle(request: Request, response: Response) {
    const data = request.body;
    
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const result = await createDeliveryUseCase.execute(data);

    return response.json(result);
  }

}