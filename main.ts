import fastify from "fastify";
import prismaPlugin from "./app/plugins/prisma";
const server = fastify();

declare module "fastify" {
  // @ts-ignore
  interface FastifyInstance {
    currentDate: () => Date;
  }
}

(async () => {
  try {
    server
      .register(await import("@fastify/sensible"))
      .register(await import("@fastify/websocket"))
      .register(await import("@fastify/request-context"))
      .register(await import("@fastify/cors"), {
        origin: "http://localhost:1234",
      })
      .register(prismaPlugin)
      .register(import("./app/controllers/tables/table_instance"), {
        prefix: "/tables",
      })
      .register(import("./app/controllers/orders/order_instance"), {
        prefix: "/orders",
      })
      .register(import("./app/controllers/products/product_instance"), {
        prefix: "/products",
      })
      .register(import("./app/controllers/wss/socket"), {
        prefix: "/wss",
      })
      .decorate("currentDate", (): Date => {
        return new Date();
      })
      .listen({
        port: 5500,
      });
    console.log("Server listening on port 3000");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
