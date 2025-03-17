import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const getCouponByCouponCode = async (couponCode: string) => {
  if (!couponCode) return console.log(`Must provide coupon code`);

  const url = `${baseUrl}/api/coupon/:${couponCode}`;
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
