import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./authenticateClientUseCase";

export class AuthenticateClientController {
  
  async handle(request: Request, response: Response) {
    const data = request.body;
    
    const authenticateClientUseCase = new AuthenticateClientUseCase();
    const result = await authenticateClientUseCase.execute(data);

    return response.json(result);
  }

}