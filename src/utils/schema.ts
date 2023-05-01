import * as zod from 'zod';

export const productSchema = zod.object({
  id: zod.number().min(1),
  name: zod.string().min(1),
  price: zod.number().min(1),
  semiWholesalePrice: zod.number().min(1),
});
