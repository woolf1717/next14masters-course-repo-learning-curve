import { ContactForm } from "@/app/contact/contactForm";

export default async function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-sm p-8">
      <h2>Contact</h2>
      <ContactForm />
    </section>
  );
}
