import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  const json: unknown = request.json();

  if (
    typeof json === "object" &&
    json &&
    "productId" in json &&
    typeof json.productId === "string"
  ) {
    console.log(`Ravalidating ${json.productId}...`);
    revalidatePath(`/product/${json.productId}`);
    revalidatePath("/products");
    return NextResponse.json(null, { status: 204 });
  }

  return NextResponse.json({ message: "Invalid body" }, { status: 400 });
}
