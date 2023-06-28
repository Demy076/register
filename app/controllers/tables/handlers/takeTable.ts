import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import * as argon2 from "argon2";
export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: {
      tableNumber: number;
    };
    Body: {
      name: string;
      email: string;
    };
  }>,
  reply: FastifyReply
) {
  const { tableNumber } = request.params;
  const { tables } = this.prisma;
  const findTable = await tables.findUnique({
    where: {
      table_number: tableNumber,
    },
  });
  if (!findTable) return reply.notFound();
  if (findTable.taken) return reply.badRequest("Table is preoccupied");
  const hashed = await argon2.hash(request.body.email);
  const createCustomer = await this.prisma.customers.create({
    data: {
      name: request.body.name,
      email: request.body.email,
      secret: hashed,
    },
  });
  if (!createCustomer) return reply.badRequest("Customer could not be created");
  const takeTable = await tables.update({
    where: {
      table_number: tableNumber,
    },
    data: {
      taken: true,
    },
  });
  if (!takeTable) return reply.badRequest("Table could not be taken");
  return reply.send({
    tableNumber: takeTable.table_number,
    customer: {
      name: createCustomer.name,
      email: createCustomer.email,
    },
    identifier: hashed,
  });
}
