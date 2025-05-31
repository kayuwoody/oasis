import { getWooClient } from "./client";
import QRCode from "qrcode";

export async function generateLockerCodeAndQR(orderId: string) {
  const woo = getWooClient();
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  const locker = Math.floor(Math.random() * 40) + 1;

  const qrText = `Order: ${orderId}, Code: ${code}, Locker: ${locker}`;
  const qrImage = await QRCode.toDataURL(qrText);

  await woo.put(`/orders/${orderId}`, {
    meta_data: [
      { key: "_pickup_code", value: code },
      { key: "_locker_number", value: locker },
      { key: "_pickup_qr_url", value: qrImage }
    ]
  });
}