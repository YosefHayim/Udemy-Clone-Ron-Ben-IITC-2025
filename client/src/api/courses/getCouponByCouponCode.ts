import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const getCouponByCouponCode = async (couponCode: string) => {
  if (!couponCode) throw new Error("Please provide couponCode in url.");

  const url = `${isProduction ? baseUrl : localhostUrl}/api/coupon/:${couponCode}`;
  try {
    const r = await axiosClient.get(url);

    if (r) {
      console.log(r);
      return r.data.exists;
    }
  } catch (error) {
    console.log(`Error occurred durning getting coupon by code: `, error.response.data.message);
    throw error;
  }
};

export default getCouponByCouponCode;
