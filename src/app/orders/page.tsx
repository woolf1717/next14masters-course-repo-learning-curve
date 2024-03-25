import { auth, currentUser } from "@clerk/nextjs";

export default async function OrdersPage() {
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  if (!email) {
    return <div>Nie masz maila, osobo gościowa.</div>;
  }

  return <pre>{JSON.stringify(auth(), null, 2)}</pre>;
}
