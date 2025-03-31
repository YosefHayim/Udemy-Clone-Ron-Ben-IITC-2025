import { Query } from "mongoose";
import { QueryString } from "../types/types.ts";

class APIFeatures<T> {
  private query: Query<T[], T>;
  private queryString: QueryString;

  constructor(query: Query<T[], T>, queryString: QueryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter(): this {
    const queryObj = { ...this.queryString };
    const excludeFields = ["page", "sort", "limit", "fields", "search"];
    excludeFields.forEach((el) => delete queryObj[el]);

    // Advanced filtering (Mongoose operators like $gte, $lte, etc.)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    const filters = JSON.parse(queryStr);

    this.query = this.query.find(filters);
    return this;
  }

  search(): this {
    if (this.queryString.search) {
      const searchQuery = this.queryString.search;
      this.query = this.query.find({
        $or: [
          { category: { $regex: searchQuery, $options: "i" } },
          { subCategory: { $regex: searchQuery, $options: "i" } },
          { courseTopic: { $regex: searchQuery, $options: "i" } },
          { courseName: { $regex: searchQuery, $options: "i" } },
        ],
      });
    }
    return this;
  }

  sort(): this {
    const sortOption = this.queryString.sort;
    console.log(this.queryString.sort);

    if (sortOption === "newest") {
      this.query = this.query.sort("-createdAt");
    } else if (sortOption === "highest-rated") {
      this.query = this.query.sort("-averageRating");
    } else if (sortOption === "Most Relevant") {
      // Placeholder for relevance logic – inject custom sorting logic here
      // For now, let's say relevance = combo of rating and reviews (example)
      this.query = this.query.sort("-averageRating -reviewsCount");
    } else if (sortOption === "most-reviewed") {
      this.query = this.query.sort("-totalRatings");
    } else {
      this.query = this.query.sort("-createdAt"); // default fallback
    }

    return this;
  }

  limitFields(): this {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate(totalCourses: number = 20): this {
    const page = Number(this.queryString.page) || 1;
    const limit = Number(this.queryString.limit) || 20;
    const totalPassed = (page - 1) * limit;
    const totalLeft = Math.max(totalCourses - totalPassed, 0);

    // Adjust limit to fetch only the remaining courses if fewer than requested
    const actualLimit = totalLeft < limit ? totalLeft : limit;

    this.query = this.query.skip(totalPassed).limit(actualLimit);
    return this;
  }

  getQuery(): Query<T[], T> {
    return this.query;
  }
}

export default APIFeatures;
