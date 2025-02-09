import Section from "../../models/courses/sectionModel.ts";
import APIFeatures from "../../utils/apiFeatures.ts";
import catchAsync from "../../utils/wrapperFn.ts";
import createError from "../../utils/errorFn.ts";
import { NextFunction, Request, Response } from "express";

const getAllSections = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const features = new APIFeatures(Section.find(), req.query)
      .filter()
      .sort()
      .search()
      .limitFields()
      .paginate();

    const sections = await features.query;

    if (!sections || sections.length === 0) {
      return next(
        createError("No Section documents found in the database", 404)
      );
    }

    res.status(200).json({
      status: "Success",
      totalSections: sections.length,
      response: sections,
    });
  }
);

const getSectionById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const sectionId = req.params.id;

    if (!sectionId) {
      return next(
        createError("Please provide the section ID in the URL.", 400)
      );
    }

    const findSection = await Section.findOne({ _id: sectionId });

    if (!findSection) {
      return next(
        createError("There is no such section in the database.", 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: findSection,
    });
  }
);

const getSectionsByCourseId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const courseId = req.params.id;

    if (!courseId) {
      return next(createError("Please provide the course ID in the URL.", 400));
    }

    const sectionsByCourseId = await Section.find({ courseId });

    if (!sectionsByCourseId || sectionsByCourseId.length === 0) {
      return next(
        createError(
          `No sections found for the course with ID: ${courseId}`,
          404
        )
      );
    }

    res.status(200).json({
      status: "success",
      results: sectionsByCourseId.length,
      data: {
        sections: sectionsByCourseId,
      },
    });
  }
);

const createSection = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, instructor } = req.body;

    if (!name || !description || !instructor) {
      return next(createError("One of the required fields is missing.", 400));
    }

    const newSection = await Section.create({
      name,
      description,
      instructor,
    });

    if (!newSection) {
      return next(createError("Error occurred during section creation.", 500));
    }

    res.status(201).json({
      status: "success",
      message: "Section created successfully.",
      data: newSection,
    });
  }
);

const updateSectionById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const sectionId = req.params.id;

    if (!sectionId) {
      return next(
        createError("Please provide the section ID in the URL.", 400)
      );
    }

    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSection) {
      return next(createError("Error occurred during section update.", 404));
    }

    res.status(200).json({
      status: "success",
      message: "Section updated successfully.",
      data: updatedSection,
    });
  }
);

const deleteSectionById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const sectionId = req.params.id;

    if (!sectionId) {
      return next(
        createError("Please provide the section ID in the URL.", 400)
      );
    }

    const deletedSection = await Section.findByIdAndDelete(sectionId);

    if (!deletedSection) {
      return next(createError("Error occurred during section deletion.", 404));
    }

    res.status(204).json({
      status: "success",
      message: "Section deleted successfully.",
    });
  }
);

export {
  getSectionsByCourseId,
  getAllSections,
  getSectionById,
  createSection,
  updateSectionById,
  deleteSectionById,
};
