import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: {
      product_id: number;
    };
  }>,
  reply: FastifyReply
) {
  const product = await this.prisma.products.findUnique({
    where: {
      id: request.params.product_id,
    },
  });
  if (!product) return reply.notFound("Product not found");
  const deleteProduct = await this.prisma.products.delete({
    where: {
      id: request.params.product_id,
    },
  });
}
