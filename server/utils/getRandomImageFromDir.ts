import { faker } from "@faker-js/faker";
import path from "path";
import fs from "fs";

export const getRandomImageFromDir = (dirPath: string) => {
  const files = fs.readdirSync(dirPath).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [".png", ".jpg", ".jpeg", ".webp"].includes(ext);
  });

  if (!files.length) throw new Error("No image files found in directory.");

  const randomFile = faker.helpers.arrayElement(files);

  // Return relative PUBLIC path (this will work in frontend)
  return `${
    process.env.NODE_ENV === "production"
      ? "https://udemy-clone-ron-ben.onrender.com"
      : "http://localhost:3000"
  }/imgs/courses/${randomFile}`;
};
