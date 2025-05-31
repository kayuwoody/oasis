import { getWooClient } from "./client";
import { generateLockerCodeAndQR } from "./generateLockerCodeAndQR";
import { setOrderTransitMetadata } from "./setOrderTransitMetadata";

export async function updateWooOrderStatus(orderId: string, status: string) {
  const woo = getWooClient();
  try {
    await woo.put(`/orders/${orderId}`, {
      status,
    });

    if (status === "ready-for-pickup") {
      await generateLockerCodeAndQR(orderId);
    }

    if (status === "in-transit") {
      await setOrderTransitMetadata(orderId);
    }
  } catch (err) {
    console.error("Failed to update WooCommerce order status:", err);
    throw err;
  }
}