import {
  axiosClient,
  baseUrl,
  isProduction,
  localhostUrl,
} from "../configuration";

const getCouponByCouponCode = async (couponCode: string) => {
  if (!couponCode) return console.log(`Must provide coupon code`);

  const url = `${isProduction ? baseUrl : localhostUrl}/api/coupon/:${couponCode}`;
  try {
    const r = await axiosClient.get(url);

    if (r) {
      return r.data.exists;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getCouponByCouponCode;
