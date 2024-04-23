import { prisma } from "../../../../database/PrismaClient"
import { hash } from "bcrypt"

interface ICreateDeliveryman {
  username: string,
  password: string
}

export class CreateDeliverymanUseCase {

  async execute({username, password}: ICreateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username.toLowerCase(),
        }        
      }
    });

    if (deliveryman)
      throw new Error('Deliveryman already exists');

    const hashPassword = await hash(password, 10)

    const result = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return result;
  }
}