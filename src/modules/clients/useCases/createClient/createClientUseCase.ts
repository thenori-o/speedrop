import { prisma } from "../../../../database/PrismaClient"
import { hash } from "bcrypt"

interface ICreateClient {
  username: string,
  password: string
}

export class CreateClientUseCase {

  async execute({username, password}: ICreateClient) {
    const client = await prisma.client.findFirst({
      where: {
        username: {
          equals: username.toLowerCase(),
        }        
      }
    });

    if (client)
      throw new Error('Client already exists');

    const hashPassword = await hash(password, 10)

    const result = await prisma.client.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return result;
  }

}