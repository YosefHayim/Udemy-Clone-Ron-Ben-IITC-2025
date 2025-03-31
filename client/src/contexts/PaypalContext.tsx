const paypalClient = import.meta.env.VITE_PAYPAL_CLIENT;

export const initialOptions = {
  clientId: paypalClient,
  currency: "USD",
  intent: "capture",
  isPaypal: false,
};
