"use client";

import { useFormState } from "react-dom";
import { contactAction } from "./contactActions";

export const ContactForm = () => {
  const [state, action] = useFormState(
    (_prevState: unknown, formData: FormData) => {
      const data = Object.fromEntries(formData);
      console.log(data);

      return contactAction(formData);
    },
    null
  );

  return (
    <form action={action} className="mt-2 flex flex-col gap-y-2">
      <label>
        <span className="text-xs text-gray-700">Name</span>
        <input
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-sm"
          name="name"
        />
      </label>
      <label>
        <span className="text-xs text-gray-700">Email</span>
        <input
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-sm"
          name="email"
          type="email"
        />
      </label>
      <label>
        <span className="text-xs text-gray-700">Message</span>
        <textarea
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-sm"
          name="message"
          rows={5}
        />
      </label>
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
      {JSON.stringify(state)}
    </form>
  );
};
