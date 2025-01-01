const Section = require("../../models/courses/sectionModel");
const APIFeatures = require("../../utils/apiFeatures");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllSections = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Section.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const sections = await features.query;

  if (!sections || sections.length === 0) {
    return next(new Error("No Section documents found in database"));
  }

  res.status(200).json({
    status: "Success",
    totalSections: sections.length,
    response: sections,
  });
});

const getSectionById = catchAsync(async (req, res, next) => {
  const sectionId = req.params.id;

  if (!sectionId) {
    return next(new Error("Please provide id in the url."));
  }

  const findSection = await Section.findOne({ _id: sectionId });

  if (!findSection) {
    return next(new Error("There is no such section in database"));
  }

  res.status(200).json({
    status: "success",
    data: findSection,
  });
});

const createSection = catchAsync(async (req, res, next) => {
  const { name, description, instructor } = req.body;

  if (!name || !description || !instructor) {
    return next(new Error("One of the fields is missing."));
  }

  const newSection = await Section.create({
    name,
    description,
    instructor,
  });

  if (!newSection) {
    return next(new Error("Error occurred during section creation."));
  }

  res.status(201).json({
    status: "success",
    message: "Section created successfully.",
    data: newSection,
  });
});

const updateSection = catchAsync(async (req, res, next) => {
  const sectionId = req.params.id;

  if (!sectionId) {
    return next(new Error("Please provide the section ID in the URL."));
  }

  const updatedSection = await Section.findByIdAndUpdate(sectionId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedSection) {
    return next(new Error("Error occurred during section update."));
  }

  res.status(200).json({
    status: "success",
    message: "Section updated successfully.",
    data: updatedSection,
  });
});

const deleteSection = catchAsync(async (req, res, next) => {
  const sectionId = req.params.id;

  if (!sectionId) {
    return next(new Error("Please provide the section ID in the URL."));
  }

  const deletedSection = await Section.findByIdAndDelete(sectionId);

  if (!deletedSection) {
    return next(new Error("Error occurred during section deletion."));
  }

  res.status(204).json({
    status: "success",
    message: "Section deleted successfully.",
  });
});

module.exports = {
  getAllSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
};
