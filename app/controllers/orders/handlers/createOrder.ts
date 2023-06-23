import { order_products } from "@prisma/client";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: { table_id: number };
    Body: { order_products: { product_id: number; quantity: number }[] };
  }>,
  reply: FastifyReply
) {
  const table = await this.prisma.tables.findUnique({
    where: {
      id: request.params.table_id,
    },
  });
  if (!table) {
    return reply.notFound("Table not found");
  }
  const productIds = request.body.order_products.map(
    (orderProduct) => orderProduct.product_id
  );
  const products = await this.prisma.products.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });
  if (products.length === 0)
    return reply.badRequest("All of the products you supplied are invalid");
  if (products.length !== productIds.length)
    return reply.notFound(
      "A few products haven't been found, make sure you're sending the correct product ids"
    );
  const totalPrice = products.reduce((acc, product) => {
    const orderProduct = request.body.order_products.find(
      (orderProduct) => orderProduct.product_id === product.id
    );
    if (!orderProduct) return acc;
    return acc + product.price! * orderProduct.quantity;
  }, 0);
  if (totalPrice === 0) return reply.badRequest("Could not determine price");
  const order = await this.prisma.orders.create({
    data: {
      completed: false,
      paid: false,
      total: totalPrice,
      order_products: {
        createMany: {
          data: request.body.order_products.map((orderProduct) => {
            const foundProduct = products.find(
              (product) => product.id === orderProduct.product_id
            );
            return {
              amount: orderProduct.quantity,
              price: foundProduct!.price!,
              total: foundProduct!.price! * orderProduct.quantity,
            };
          }),
          skipDuplicates: true,
        },
      },
      tables: {
        connect: {
          id: table.id,
        },
      },
    },
    include: {
      order_products: true,
    },
  });
  if (!order) return reply.internalServerError();

  return reply.status(201).send({
    success: true,
    data: order,
  });
}
