import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Body: {
      product_name: string;
      price: number;
      description: string;
      active: boolean;
    };
  }>,
  reply: FastifyReply
) {
  const productExists = await this.prisma.products.findUnique({
    where: {
      name: request.body.product_name,
    },
  });
  if (productExists) return reply.conflict("Product already exists");
  const newProduct = await this.prisma.products.create({
    data: {
      name: request.body.product_name,
      price: request.body.price,
      description: request.body.description,
      active: request.body.active,
    },
  });
  if (!newProduct) return reply.internalServerError();
  return reply.status(201).send({
    success: true,
    data: newProduct,
  });
}
