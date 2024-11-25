import { z } from 'zod'

// Define the Zod schema
const BikeZodValidation = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .trim(),

  brand: z
    .string({
      required_error: 'Brand is required',
    })
    .trim(),

  price: z
    .number({
      required_error: 'Price is required',
    })
    .min(0, { message: 'Price must be a positive number' }),

  category: z
    .enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
      errorMap: (issue, ctx) => {
        return { message: `${ctx.data} is not a valid category` }
      },
    })
    .refine((val) => !val, { message: 'Category is required' }),

  description: z
    .string({
      required_error: 'Description is required',
    })
    .trim(),

  quantity: z
    .number({
      required_error: 'Quantity is required',
    })
    .min(0, { message: 'Quantity must be a non-negative number' }),

  inStock: z.boolean({
    required_error: 'inStock must be a boolean value',
  }),
})

// Export the schema for validation
export default BikeZodValidation
