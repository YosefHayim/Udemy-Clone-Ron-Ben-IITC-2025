const { catchAsync } = require("../../utils/wrapperFn");
const Instructor = require("../../models/users/instructorModel");
const createError = require("../../utils/errorFn");

const getInstructorById = catchAsync(async (req, res, next) => {
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
});

module.exports = { getInstructorById };
