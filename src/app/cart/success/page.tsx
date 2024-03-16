import Stripe from "stripe";
import { redirect } from "next/navigation";

export default async function CartSuccessPage({
  searchParams,
}: {
  searchParams: { sessionId?: string };
}) {
  if (!searchParams.sessionId) {
    redirect("/");
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
    typescript: true,
  });

  const session = await stripe.checkout.sessions.retrieve(
    searchParams.sessionId
  );

  return <h2>{session.payment_status}</h2>;
}
