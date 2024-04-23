import { prisma } from "../../../../database/PrismaClient"
import { hash } from "bcrypt"

interface CreateClient {
  username: string,
  password: string
}

export class CreateClientUseCase {

  async execute({username, password}: CreateClient) {
    const clientExists = await prisma.client.findFirst({
      where: {
        username: {
          equals: username.toLowerCase(),
        }        
      }
    });

    if (clientExists)
      throw new Error('Client already exists');

    const hashPassword = await hash(password, 10)

    const client = await prisma.client.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return client;
  }

}