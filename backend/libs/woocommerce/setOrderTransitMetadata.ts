import { getWooClient } from "./client";

export async function setOrderTransitMetadata(orderId: string) {
  const woo = getWooClient();
  const now = new Date().toISOString();
  await woo.put(`/orders/${orderId}`, {
    meta_data: [
      { key: "_in_transit_at", value: now }
    ]
  });
}