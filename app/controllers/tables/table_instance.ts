import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import tables from "./handlers/tables";
import createTable from "./handlers/createTable";
import deleteTable from "./handlers/deleteTable";
import alterTable from "./handlers/alterTable";

export default async function (server: FastifyInstance) {
  server.get(
    "/:page",
    {
      schema: {
        params: {
          type: "object",
          required: ["page"],
          properties: {
            page: { type: "number" },
          },
        },
      },
    },
    tables
  );
  server.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          required: ["tableNumber"],
          properties: {
            tableNumber: { type: "number" },
          },
        },
      },
    },
    createTable
  );
  server.delete(
    "/:tableNumber",
    {
      schema: {
        params: {
          type: "object",
          required: ["tableNumber"],
          properties: {
            tableNumber: { type: "number" },
          },
        },
      },
    },
    deleteTable
  );
  server.put(
    "/:tableNumber",
    {
      schema: {
        params: {
          type: "object",
          required: ["tableNumber"],
        },
      },
    },
    alterTable
  );
}
