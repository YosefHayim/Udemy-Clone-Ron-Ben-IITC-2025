import catchAsync from "../../utils/wrapperFn";
import Instructor from "../../models/users/instructorModel";
import createError from "../../utils/errorFn";
import { NextFunction, Request, Response } from "express";

const getInstructorById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const instructorId = req.params.id;

    if (!instructorId) {
      return next(createError("Please provide ID in the URL.", 400));
    }

    const findInstructor = await Instructor.findOne({ userId: instructorId });

    if (!findInstructor) {
      return next(
        createError("There is no such instructor in the database.", 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: findInstructor,
    });
  }
);

export { getInstructorById };
