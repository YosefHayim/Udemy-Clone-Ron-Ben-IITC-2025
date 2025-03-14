import { axiosClient, localhostUrl } from "../configuration";

const activateCouponCode = async (couponCode: string) => {
  if (!couponCode) return console.log(`Must provide coupon code`);

  const url = `${localhostUrl}/api/coupon/`;
  try {
    const r = axiosClient.get(url);

    if (r) {
      console.log(r);
      return r;
    }
  } catch (error) {
    console.log(error);
  }
};

export default activateCouponCode;
