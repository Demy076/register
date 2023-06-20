import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Body: { tableNumber: number };
  }>,
  reply: FastifyReply
) {
  const table = await this.prisma.tables.findUnique({
    where: {
      table_number: request.body.tableNumber,
    },
  });
  if (table) {
    return reply.conflict("Table already exists");
  }
  const newTable = await this.prisma.tables.create({
    data: {
      table_number: request.body.tableNumber,
      active: true,
    },
  });
  if (!newTable) {
    return reply.internalServerError();
  }
  reply.status(201).send({
    success: true,
    data: newTable,
  });
}
