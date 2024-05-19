"use server";

import { contactSchema } from "@/app/contact/contactSchema";

export const contactAction = async (formData: FormData) => {
  const parsedData = await contactSchema.safeParseAsync(
    Object.fromEntries(formData)
  );
  if (parsedData.success) {
    console.log("Działa", parsedData.data);
  } else {
    console.log("Nie działa", parsedData.error.flatten().fieldErrors);
  }
};
