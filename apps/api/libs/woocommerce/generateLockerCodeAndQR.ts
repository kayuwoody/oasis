import { getWooClient } from "./client";

export async function generateLockerCodeAndQR(orderId: string) {
  const woo = getWooClient();
  const lockerNumber = Math.floor(Math.random() * 40) + 1;
  const pickupCode = Math.random().toString(36).substring(2, 8).toUpperCase();

  await woo.post(`/orders/${orderId}/notes`, {
    note: `Locker Number: ${lockerNumber}, Pickup Code: ${pickupCode}`,
    customer_note: false,
  });

  await woo.put(`/orders/${orderId}`, {
    meta_data: [
      { key: "_locker_number", value: lockerNumber },
      { key: "_pickup_code", value: pickupCode },
    ],
  });
}