import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export function getWooClient() {
  return new WooCommerceRestApi({
    url: process.env.WC_URL || "https://example.com",
    consumerKey: process.env.WC_KEY || "ck_xxx",
    consumerSecret: process.env.WC_SECRET || "cs_xxx",
    version: "wc/v3",
  });
}