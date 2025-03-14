import express, { NextFunction, Request, Response } from "express";
import { grantedAccess } from "../../controllers/authorization/authController.ts";
import {
  createCoupon,
  deactivateCouponById,
  getAllCoupons,
  getCouponByCode,
  getInstructorCoupons,
  updateCoupon,
} from "../../controllers/courses/couponController.ts";

const router = express.Router();

router.param("id", (req: Request, res: Response, next: NextFunction, val) => {
  console.log(`ID is: ${val}`);
  next();
});

router.get("/all", getAllCoupons);

router.get("/", getCouponByCode);

router.get("/instructor", getInstructorCoupons);

router.post("/create", grantedAccess, createCoupon);

router.put("/update/:id", grantedAccess, updateCoupon);

router.delete("/deactivate/:id", deactivateCouponById);

export default router;
