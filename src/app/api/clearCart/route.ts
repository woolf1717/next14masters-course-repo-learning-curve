import { type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

export async function POST(_request: NextRequest) {
  cookies().set("cartId", "");
  const router = useRouter();
  router.push(
    `cart/success/?sessionId=cs_test_a1B69KBGgYaWUSOCIzRBlZD5tMVneOhgy4Y7F7YmQiJvnWYPwpOoCAGRKn`
  );
}
