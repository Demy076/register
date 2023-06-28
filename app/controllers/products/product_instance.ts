import { FastifyInstance } from "fastify";
import createProduct from "./handlers/createProduct";
import deleteProduct from "./handlers/deleteProduct";

export default async function (server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          required: ["product_name", "price", "description", "active"],
          properties: {
            product_name: { type: "string" },

            price: { type: "number", minimum: 0, format: "float" },
            description: { type: "string" },
            active: { type: "boolean" },
          },
        },
      },
    },
    createProduct
  );
  server.delete(
    "/:product_id",
    {
      schema: {
        params: {
          type: "object",
          required: ["product_id"],
          properties: {
            product_id: { type: "number" },
          },
        },
      },
    },
    deleteProduct
  );
}
