import { FastifyInstance } from "fastify";
import getOrder from "./handlers/getOrder";
import createOrder from "./handlers/createOrder";

export default async function (server: FastifyInstance) {
  server.get(
    "/:order_id",
    {
      schema: {
        params: {
          type: "object",
          required: ["order_id"],
          properties: {
            order_id: { type: "number" },
          },
        },
      },
    },
    getOrder
  );
  server.post(
    "/:table_id",
    {
      schema: {
        params: {
          type: "object",
          required: ["table_id"],
          properties: {
            table_id: { type: "number" },
          },
        },
        body: {
          type: "object",
          required: ["order_products"],
          properties: {
            order_products: {
              type: "array",
              minItems: 1,
              items: {
                type: "object",
                required: ["product_id", "quantity"],
                properties: {
                  product_id: { type: "number" },
                  quantity: { type: "number" },
                },
              },
            },
          },
        },
      },
    },
    createOrder
  );
}
