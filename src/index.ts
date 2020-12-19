let currentCategoryTests = new Map<string, test[]>();
let currentTestCategory: string;

export const describe = (title: string, testCategory: () => void): void => {
  currentTestCategory = title;
  testCategory();

  const tests = currentCategoryTests.get(currentTestCategory);
  if(tests === undefined){
    return; 
  }

  console.log(currentTestCategory);
  for (const test of tests) {
    try {
      console.log(`   it ${test.title}`);
      test.test();
    } catch (error) {
      console.log(error);
    }
  }
};

export const it = (title: string, test: () => void): void => {
  const category = currentCategoryTests.get(currentTestCategory);

  if (category === undefined) {
    currentCategoryTests.set(currentTestCategory, [{ title, test }]);

    return;
  }

  category.push({title, test});
};

interface test {
  title: string;
  test: () => void;
}
