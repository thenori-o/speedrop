import { compare } from "bcrypt";
import { prisma } from "../../../database/PrismaClient";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string, 
  password: string
}

export class AuthenticateClientUseCase {

  async execute({ username, password}: IAuthenticateClient) {

    const client = await prisma.client.findFirst({
      where: {
        username    
      }
    });

    if (!client)
      throw new Error('Username or password invalid');

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch)
      throw new Error('Username or password invalid');

    const token = sign({username}, "914ebdda4b3f36685a4dd8b3421197a3", {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }

}