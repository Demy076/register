import { FastifyInstance } from "fastify";

export default async function (server: FastifyInstance) {
  server.get(
    "/customer",
    { websocket: true },
    async function (connection, request) {
      console.log("customer");
    }
  );
  server.get(
    "/retailer",
    { websocket: true },
    async function (connection, request) {
      connection.on("customerMessage", (message: string) => {
        console.log(message);
      });
      console.log("retailer");
    }
  );
}
