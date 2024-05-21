import { Modal } from "@/app/@modal/(.)cart/modal";

export default async function CartPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Modal>
      <div className="w-full h-full bg-red-300">asdokadfjasdfnasdifnsaduif</div>
    </Modal>
  );
}
