const testCategories: string[] = [];
let currentCategory: string;

export const describe = (title: string, testCategory: () => void): void => {
  testCategories.push(title);

  currentCategory = title;

  testCategory();
  
  console.log(testCategories);
};

export const it = (title: string, test: () => void): void => {
  test();

  console.log(title, currentCategory);
};
