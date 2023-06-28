import { FastifyInstance } from "fastify";
import getOrder from "./handlers/getOrder";
import createOrder from "./handlers/createOrder";
import alterQuanityProductOrder from "./handlers/alterQuanityProductOrder";
import addProductToOrder from "./handlers/addProductToOrder";
import deleteProductFromOrder from "./handlers/deleteProductFromOrder";
import deleteOrder from "./handlers/deleteOrder";

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
              uniqueItems: true,
              items: {
                type: "object",
                required: ["product_id", "quantity"],
                // product_id must be unique
                properties: {
                  product_id: { type: "number", format: "json-pointer" },
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
  server.put(
    "/:order_id-:product_order_id",
    {
      schema: {
        params: {
          type: "object",
          required: ["order_id", "product_order_id"],
          properties: {
            order_id: { type: "number" },
            product_order_id: { type: "number" },
          },
        },
        body: {
          type: "object",
          required: ["quantity"],
          properties: {
            quantity: { type: "number" },
          },
        },
      },
    },
    alterQuanityProductOrder
  );
  server.post(
    "/:order_id-:product_id",
    {
      schema: {
        params: {
          type: "object",
          required: ["order_id", "product_id"],
          properties: {
            order_id: { type: "number" },
            product_id: { type: "number" },
          },
        },
        body: {
          type: "object",
          required: ["quantity"],
          properties: {
            quantity: { type: "number" },
          },
        },
      },
    },
    addProductToOrder
  );
  server.delete(
    "/:order_id-:product_order_id",
    {
      schema: {
        params: {
          type: "object",
          required: ["order_id", "product_order_id"],
          properties: {
            order_id: { type: "number" },
            product_order_id: { type: "number" },
          },
        },
      },
    },
    deleteProductFromOrder
  );
  server.delete(
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
    deleteOrder
  );
}
