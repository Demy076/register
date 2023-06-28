import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: { order_id: number; product_id: number };
    Body: { quantity: number };
  }>,
  reply: FastifyReply
) {
  const { order_id, product_id } = request.params;
  const { quantity } = request.body;
  const { prisma } = this;
  const findProduct = await prisma.products.findUnique({
    where: { id: product_id },
  });
  if (!findProduct) return reply.notFound("Product not found");
  console.log(order_id);
  const productAlreadyOnOrder = await prisma.order_products.findFirst({
    where: {
      id: order_id,
      product_id: product_id,
    },
    include: {
      orders: {
        include: { order_products: true },
      },
      products: true,
    },
  });
  if (!productAlreadyOnOrder)
    return reply.badRequest(
      "Could not find order or determine if product is already on order"
    );
  if (productAlreadyOnOrder) reply.conflict("Product already on order");
  //   Insert the product on the order table and increment the quantity
  const totalPrice = quantity * findProduct?.price!;

  const newProductOnOrder = await prisma.orders.upsert({
    where: { id: order_id },
    update: {
      total: {
        increment: totalPrice,
      },
    },
    create: {
      order_products: {
        create: {
          amount: quantity,
          total: parseFloat(totalPrice.toFixed(2)),
          price: findProduct?.price,
          products: {
            connect: {
              id: product_id,
            },
          },
        },
      },
    },
  });
  if (!newProductOnOrder) return reply.internalServerError();
  return reply.status(201).send({
    success: true,
    data: newProductOnOrder,
    order: productAlreadyOnOrder,
  });
}
