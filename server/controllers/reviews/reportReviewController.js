const courseReviews = require("../../models/reviews/courseReviewModel");
const ReportReview = require("../../models/reviews/reportReviewModel");
const APIFeatures = require("../../utils/apiFeatures");
const { catchAsync } = require("../../utils/wrapperFn");
const createError = require("../../utils/errorFn");

const getAllReports = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(ReportReview.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .search()
    .paginate();

  const reports = await features.query;

  if (!reports || reports.length === 0) {
    return next(createError("No report documents found in the database", 404));
  }

  res.status(200).json({
    status: "Success",
    totalReports: reports.length,
    response: "Report list",
    reports,
  });
});

const getReportById = catchAsync(async (req, res, next) => {
  const reportId = req.params.id;

  if (!reportId) {
    return next(createError("Please provide the report ID in the URL", 400));
  }

  const report = await ReportReview.findById(reportId);

  if (!report) {
    return next(createError(`No report found with ID: ${reportId}`, 404));
  }

  res.status(200).json({
    message: "success",
    response: report,
  });
});

const getReportsByReviewId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.reviewId;

  if (!reviewId) {
    return next(createError("Please provide the review ID in the URL", 400));
  }

  const review = await courseReviews.findById(reviewId);

  if (!review) {
    return next(createError(`No review found with ID: ${reviewId}`, 404));
  }

  const reportsReviews = await ReportReview.find({ review: reviewId });

  if (!reportsReviews || reportsReviews.length === 0) {
    return next(
      createError(`No reports found for review ID: ${reviewId}`, 404)
    );
  }

  res.status(200).json({
    message: "success",
    response: "All the reports of this review below",
    totalReports: review.reports.length,
    data: reportsReviews,
  });
});

const createReportByReviewId = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;
  const { issueType, issueDetails, userId } = req.body;

  if (!issueType || !issueDetails || !userId) {
    return next(
      createError("Please provide issueType , userId, issueDetails.", 400)
    );
  }

  if (!reviewId) {
    return next(createError("Please provide a review ID in the URL.", 400));
  }

  const review = await courseReviews.findById(reviewId);

  if (!review) {
    return next(createError(`No review found with ID: ${reviewId}`, 404));
  }

  if (review.user._id.toString() !== userId.toString()) {
    return next(
      createError(
        `Id of user review and of the user you provided is not valid:
        You provided: ${userId}
        Review Of User: ${review.user._id}`,
        400
      )
    );
  }

  if (req.user._id.toString() === review.user.toString()) {
    return next(createError("You cannot report your own review.", 403));
  }

  const report = await ReportReview.create({
    user: req.user._id,
    review: reviewId,
    issueType,
    issueDetails,
  });

  review.reports.entries.push(report._id);
  review.reports.count += 1;
  await review.save();

  res.status(201).json({
    status: "success",
    message: `Successfully created report for review ID: ${reviewId}`,
    data: report,
  });
});

const deleteReportById = catchAsync(async (req, res, next) => {
  const reportId = req.params.id;

  if (!reportId) {
    return next(createError("Please provide a report ID in the URL.", 400));
  }

  const report = await ReportReview.findById(reportId);

  if (!report) {
    return next(createError(`No report found with ID: ${reportId}`, 404));
  }

  const review = await courseReviews.findById(report.review);
  if (review) {
    review.reports.entries = review.reports.entries.filter(
      (entryId) => entryId.toString() !== reportId
    );
    review.reports.count = Math.max(0, review.reports.count - 1);
    await review.save();
  }

  await report.deleteOne();

  res.status(200).json({
    status: "success",
    message: `Report with ID: ${reportId} has been successfully deleted.`,
  });
});

module.exports = {
  createReportByReviewId,
  getAllReports,
  getReportById,
  getReportsByReviewId,
  deleteReportById,
};
