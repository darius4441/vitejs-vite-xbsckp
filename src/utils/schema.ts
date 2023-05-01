import * as zod from 'zod';

// schemas
export const productSchema = zod.object({
  id: zod.number().min(1),
  name: zod.string().min(1),
  price: zod.number().min(1),
  semiWholesalePrice: zod.number().min(1),
});

export const basketItemSchema = zod.object({
  product: zod.number().min(1),
  productnAME: zod.string().optional(),
  quantity: zod.string().min(1),
  price: zod.number().min(1),
  semiWholesalePrice: zod.number().min(1).optional(),
  total: zod.number().min(1),
});

export const basketSchema = zod.object({
  id: zod.number().min(1).optional(),
  customer: zod.string().min(1),
  total: zod.number().min(1),
  basketItems: zod.array(basketItemSchema),
});

// types
export type ProductType = zod.infer<typeof productSchema>;
export type BasketItemType = zod.infer<typeof basketItemSchema>;
export type BasketType = zod.infer<typeof basketSchema>;
