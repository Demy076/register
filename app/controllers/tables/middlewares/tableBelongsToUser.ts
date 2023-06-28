import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Headers: {
      authorization: string;
    };
  }>,
  reply: FastifyReply
) {
  const { tables } = this.prisma;
  const findCustomer = await this.prisma.customers.findFirst({
    where: {
      secret: Buffer.from(
        request.headers.authorization.split(" ")[1],
        "base64"
      ).toString("utf-8"),
    },
  });
  if (!findCustomer) return reply.notFound("Customer not found");
  const findTable = await tables.findUnique({
    where: {
      table_number: findCustomer.table_id!,
    },
  });
  if (!findTable) return reply.unauthorized("Not permitted");
  // @ts-ignore
  request.requestContext.set("table", findTable);
  return Promise.resolve();
}
