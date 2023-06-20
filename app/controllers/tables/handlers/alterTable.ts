import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: {
      tableNumber: number;
    };
    Body: {
      tableNumber?: number;
      active?: boolean;
    };
  }>,
  reply: FastifyReply
) {
  if (
    request.body.tableNumber === undefined &&
    request.body.active === undefined
  ) {
    return reply.badRequest("No data to update");
  }

  const table = await this.prisma.tables.findUnique({
    where: {
      table_number: request.params.tableNumber,
    },
  });
  if (!table) {
    return reply.notFound("Table does not exist");
  }
  const { tableNumber, active } = request.body;
  if (tableNumber && tableNumber !== table.table_number) {
    table.table_number = tableNumber;
  }
  if (active !== undefined && active !== table.active) {
    table.active = active;
  }
  const updatedTable = await this.prisma.tables.update({
    where: {
      table_number: request.params.tableNumber,
    },
    data: table,
  });
  if (!updatedTable) {
    return reply.internalServerError();
  }
  return reply.send({
    success: true,
    data: updatedTable,
    message: `Updated table ${request.params.tableNumber}`,
  });
}
