import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: { tableNumber: number };
  }>,
  reply: FastifyReply
) {
  const table = await this.prisma.tables.findUnique({
    where: {
      table_number: request.params.tableNumber,
    },
  });
  if (!table) {
    return reply.notFound("Table does not exist");
  }
  const deletedTable = await this.prisma.tables.delete({
    where: {
      table_number: request.params.tableNumber,
    },
  });
  if (!deletedTable) {
    return reply.internalServerError();
  }
  reply.send({
    success: true,
    data: deletedTable,
  });
}
