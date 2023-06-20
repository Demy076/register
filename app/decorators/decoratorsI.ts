import { FastifyInstance } from "fastify";

export default interface Decorators extends FastifyInstance {
  currentDate: () => Date;
}
