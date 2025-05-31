import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export function getWooClient() {
  return new WooCommerceRestApi({
    url: process.env.WC_API_URL!,
    consumerKey: process.env.WC_CONSUMER_KEY!,
    consumerSecret: process.env.WC_CONSUMER_SECRET!,
    version: "wc/v3",
  });
}