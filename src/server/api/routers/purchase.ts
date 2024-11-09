import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const purchaseSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  cost: z.number(),
  date: z.date().optional(),
});

export const purchaseRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.purchase.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  create: protectedProcedure.input(purchaseSchema).query(({ ctx, input }) => {
    return ctx.db.purchase.create({
      data: {
        userId: ctx.session.user.id,
        name: input.name,
        description: input.description,
        cost: input.cost,
        date: input.date,
      },
    });
  }),
});
