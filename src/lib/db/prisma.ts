import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const GlobalforPrisma = globalThis as unknown as {
  prisma?: prismaClientSingleton | undefined;
};

const prisma = GlobalforPrisma.prisma || prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  GlobalforPrisma.prisma = prisma;
}
