import * as zod from "zod";

export const contactSchema = zod.object({
  name: zod.string().min(3).max(50),
  email: zod.string().email(),
  message: zod.string().min(10).max(1000),
});

export type ContactFormData = zod.TypeOf<typeof contactSchema>;