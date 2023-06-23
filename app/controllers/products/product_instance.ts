import { FastifyInstance } from "fastify";

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

            price: { type: "number", minimum: 0, exclusiveMinimum: true },
            description: { type: "string" },
            active: { type: "boolean" },
          },
        },
      },
    },
    async () => {}
  );
}
