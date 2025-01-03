const courseReviews = require("../../models/reviews/courseReviewModel");
const ReportReview = require("../../models/reviews/reportReviewModel");
const APIFeatures = require("../../utils/apiFeatures");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllReports = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(ReportReview.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const reports = await features.query;

  if (!reports || reports.length === 0) {
    return next(new Error("No reviews documents found in database"));
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
    return next(new Error(`Please provide the report id in the url`));
  }

  const report = await ReportReview.findById(reportId);

  if (!report) {
    return next(new Error(`There is no such report with this ID: ${reportId}`));
  }

  res.status(200).json({
    message: "success",
    response: report,
  });
});

const getReportsByReviewId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.reviewId;

  if (!reviewId) {
    return next(new Error(`Please provide review ID in the url :${reviewId}`));
  }

  const review = await courseReviews.findById(reviewId);
  const reportsReviews = await ReportReview.find({ review: reviewId });

  if (!review) {
    return next(new Error(`There is no such review with this ID: ${reviewId}`));
  }

  res.status(200).json({
    message: "success",
    response: "All the reports of this review below",
    totalReports: review.reports.length,
    data: reportsReviews,
  });
});

const createReportByReviewId = catchAsync(async (req, res, next) => {});

module.exports = {
  createReportByReviewId,
  getAllReports,
  getReportById,
  getReportsByReviewId,
};
