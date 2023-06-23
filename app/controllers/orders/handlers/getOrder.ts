import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: { order_id: number };
  }>,
  reply: FastifyReply
) {
  const order = await this.prisma.orders.findUnique({
    where: {
      id: request.params.order_id,
    },
    include: {
      order_products: {
        include: {
          orders: true,
        },
      },
    },
  });
  if (!order) {
    return reply.notFound("Order not found");
  }
  return reply.send({
    success: true,
    data: order,
  });
}
