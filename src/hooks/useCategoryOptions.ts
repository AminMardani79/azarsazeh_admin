import { useState, useEffect } from 'react';

export const generateCategoryOptions = (categories: any) =>
  categories?.map((category: any) => {
    return {
      label: category.title,
      value: category.id,
    };
  });

export const useCategoryOptions = (categories: any) => {
  const [categoryOptions, setCategoryOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      const options = generateCategoryOptions(categories);

      setCategoryOptions(options);
    }
  }, [categories]);

  return { categoryOptions };
};
