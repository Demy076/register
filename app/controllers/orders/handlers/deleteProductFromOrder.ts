import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: {
      order_id: number;
      product_order_id: number;
    };
  }>,
  reply: FastifyReply
) {
  const { order_id, product_order_id } = request.params;
  const { prisma } = this;
  const findProductOnOrder = await prisma.order_products.findFirst({
    where: {
      order_id: order_id,
      product_id: product_order_id,
    },
  });
  if (!findProductOnOrder) return reply.notFound("Product not found on order");
  const deleteProductFromOrder = await prisma.order_products.delete({
    where: {
      id: findProductOnOrder.id,
    },
  });
  if (!deleteProductFromOrder) return reply.internalServerError();
  return reply.status(204);
}
