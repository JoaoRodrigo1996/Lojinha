const Stripe = require("stripe");

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Ecommerce",
  },
});
