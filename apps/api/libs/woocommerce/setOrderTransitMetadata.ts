import { getWooClient } from "./client";

export async function setOrderTransitMetadata(orderId: string) {
  const woo = getWooClient();
  await woo.put(`/orders/${orderId}`, {
    meta_data: [
      { key: "_in_transit", value: true },
    ],
  });
}