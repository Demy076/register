import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: {
      order_id: number;
    };
  }>,
  reply: FastifyReply
) {
  const { order_id } = request.params;

  const order = await this.prisma.orders.findUnique({
    where: {
      id: order_id,
    },
  });
  if (!order) return reply.notFound("Order not found");
  //   Delete it
  const deleteOrder = await this.prisma.orders.delete({
    where: {
      id: order_id,
    },
  });
  if (!deleteOrder) return reply.internalServerError();
  return reply.status(204);
}
