import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

declare module "fastify" {
  // @ts-ignore
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const prismaPlugin: FastifyPluginAsync = fp(async (server) => {
  const prisma = new PrismaClient();

  await prisma.$connect();

  server.addHook("onRequest", async (request) => {
    // Add the Prisma client to the request object
    server.prisma = prisma;
  });

  server.addHook("onClose", async () => {
    await prisma.$disconnect();
  });
});

export default prismaPlugin;
