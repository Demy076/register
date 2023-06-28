import { tables } from "@prisma/client";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest,
  reply: FastifyReply
) {
  // @ts-ignore
  const hasTable = request.requestContext.get("table") as tables;
  if (!hasTable) return reply.unauthorized("Not permitted");
  return Promise.resolve();
}
