import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
// @ts-ignore
import QRCode from "qrcode";

const generateBarcode = async (text: string): Promise<string> => {
  try {
    const res = await QRCode.toDataURL(text);
    return res;
  } catch (err) {
    console.error(err);
    return "";
  }
};

export default async function (
  this: FastifyInstance,
  request: FastifyRequest<{
    Params: { page: number };
  }>,
  reply: FastifyReply
) {
  // If page above max int32
  if (request.params.page > 2147483647) {
    return reply.badRequest();
  }

  const host = request.headers.host;
  if (!host) {
    return reply.badRequest();
  }
  const { page } = request.params;
  const tables = await this.prisma.tables.findMany({
    take: 10,
    skip: (page - 1) * 10,
  });
  const countRows = await this.prisma.tables.count();
  const tablesWithBarcode = await Promise.all(
    tables.map(async (table) => {
      const barcode = await generateBarcode(`${host}/tables/${table.id}`);
      return { ...table, barcode };
    })
  );
  reply.send({
    message: "Tables retrieved successfully",
    tablesWithBarcode,
    pagination: {
      page,
      pageSize: 10,
      totalPages: Math.ceil(countRows / 10),
      itemsTotal: countRows,
      itemOnPage: tables.length,
      timeOfRequest: this.currentDate().toString(),
    },
  });
}
