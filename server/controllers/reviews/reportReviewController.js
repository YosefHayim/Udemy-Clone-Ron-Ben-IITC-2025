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
    return next(new Error("No report documents found in database"));
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

  if (!review) {
    return next(new Error(`There is no such review with this ID: ${reviewId}`));
  }

  const reportsReviews = await ReportReview.find({ review: reviewId });

  if (!reportsReviews) {
    return next(
      new Error(`There is no such report to this review: ${reviewId}`)
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
  const { issueType, issueDetails } = req.body;

  if (!issueType || !issueDetails) {
    return next(new Error("Please provide both issueType and issueDetails."));
  }

  if (!reviewId) {
    return next(new Error("Please provide a review ID in the URL."));
  }

  const review = await courseReviews.findById(reviewId);
  if (!review) {
    return next(new Error(`No review found with ID: ${reviewId}`));
  }

  if (req.user._id.toString() === review.user.toString()) {
    return next(new Error("You cannot report your own review."));
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
    return next(new Error("Please provide a report ID in the URL."));
  }

  const report = await ReportReview.findById(reportId);

  if (!report) {
    return next(new Error(`No report found with ID: ${reportId}`));
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
