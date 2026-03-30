import { navCategories } from "../data/nav-links";

export const getNavigationInfo = (pathname: string) => {
  // Parse pathname to map to nav hierarchy
  const [categoryPathSegment, sectionPathSegment, pagePathSegment] = pathname
    .split("/")
    .slice(1);

  // Find matching nav item definitions
  const currentCategory = navCategories.find(
    (p) => p.slug === categoryPathSegment,
  );
  const currentSection = currentCategory?.sections.find(
    (s) => s.slug === sectionPathSegment,
  );
  const currentPage = currentSection?.pages.find(
    (l) => l.slug === pagePathSegment,
  );
  const currentPageIndex = currentPage
    ? currentSection!.pages.indexOf(currentPage)
    : -1;
  const previousPage = currentSection?.pages[currentPageIndex - 1] ?? null;
  const nextPage = currentSection?.pages[currentPageIndex + 1] ?? null;

  return {
    currentCategory,
    currentSection,
    currentPage,
    previousPage,
    nextPage,
  };
};
