import { categoriesData } from "./categoriesData";

export const searchAlgoLocalStorage = (searchTerm: string) => {
  const normalizedTerm = searchTerm.toLowerCase();

  let isValidSearch = false;

  for (const category of categoriesData) {
    const subcategories = category?.subcategory || [];

    for (const sub of subcategories) {
      const title = sub?.title?.toLowerCase() || "";
      const name = sub?.name?.toLowerCase() || "";
      const topics = sub?.topics || [];

      const titleMatch = title.includes(normalizedTerm);
      const nameMatch = name.includes(normalizedTerm);
      const topicMatch = topics.some((topic: string) =>
        topic.toLowerCase().includes(normalizedTerm),
      );

      if (titleMatch || nameMatch || topicMatch) {
        isValidSearch = true;
        break;
      }
    }

    if (isValidSearch) break;
  }

  if (!isValidSearch) return; // Skip saving if no match

  const existingSearches = JSON.parse(
    localStorage.getItem("searchesOfUser") || "['web','java script', 'python']",
  );

  if (!existingSearches.includes(normalizedTerm)) {
    existingSearches.push(normalizedTerm);
  }

  localStorage.setItem("searchesOfUser", JSON.stringify(existingSearches));
};
