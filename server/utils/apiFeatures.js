class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludeFields = ["page", "sort", "limit", "fields", "search"];
    excludeFields.forEach((el) => delete queryObj[el]);

    // Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    const filters = JSON.parse(queryStr);

    this.query = this.query.find(filters);
    return this;
  }

  search() {
    if (this.queryString.search) {
      const searchQuery = this.queryString.search;
      this.query = this.query.find({
        $or: [
          { courseName: { $regex: searchQuery, $options: "i" } },
          { category: { $regex: searchQuery, $options: "i" } },
        ],
      });
    }
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate(totalCourses) {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 20;
    const totalPassed = (page - 1) * limit;
    const totalLeft = Math.max(totalCourses - totalPassed, 0);

    // Adjust limit to fetch only the remaining courses if they are less than the requested limit
    const actualLimit = totalLeft < limit ? totalLeft : limit;

    this.query = this.query.skip(totalPassed).limit(actualLimit);
    return this;
  }
}

module.exports = APIFeatures;
