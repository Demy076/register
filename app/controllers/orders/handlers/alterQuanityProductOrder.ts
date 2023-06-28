import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: { order_id: number; product_order_id: number };
    Body: { quantity: number };
  }>,
  reply: FastifyReply
) {
  const { order_id, product_order_id } = request.params;
  const { quantity } = request.body;
  const { prisma } = this;
  const productOnOrder = await prisma.order_products.findUnique({
    where: { id: product_order_id },
    include: { orders: true, products: true },
  });
  const order = await prisma.orders.findUnique({
    where: { id: order_id },
    include: { order_products: true },
  });
  if (!order) return reply.notFound();
  if (!productOnOrder) return reply.notFound();
  if (productOnOrder.order_id !== productOnOrder.orders?.id)
    return reply.badRequest();
  if (productOnOrder.product_id !== productOnOrder.products?.id)
    return reply.badRequest();
  if (productOnOrder.amount === quantity)
    return reply.badRequest("No change in product quantity");
  //   Update the quanity of the product and it's total along on the order and the order product itself
  const newTotalProduct = quantity * +productOnOrder.products.price!;
  const totalPrice = order.order_products.reduce(
    (acc, orderProduct) => acc + orderProduct.total!,
    0
  );
  console.log(totalPrice);
  const updatedProductOnOrder = await prisma.order_products.update({
    where: { id: product_order_id },
    data: {
      amount: quantity,
      total: parseFloat(newTotalProduct.toFixed(2)),
      orders: {
        update: {
          total: parseFloat(totalPrice.toFixed(2)),
        },
      },
    },
    include: { orders: true, products: true },
  });
  if (!updatedProductOnOrder) return reply.internalServerError();
  return reply.send({
    success: true,
    adjustedProduct: updatedProductOnOrder,
    order: order,
  });
}
