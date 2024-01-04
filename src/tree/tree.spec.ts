import { categoriesList, categoriesTree } from './data';
import { listToTree, treeToList } from './tree';
import { CategoriesListItem } from './types';

describe('for tree', () => {
  test('listToTree', () => {
    expect(listToTree(categoriesList)).toEqual(categoriesTree);
  });

  test('treeToList', () => {
    const sortCb = (a: CategoriesListItem, b: CategoriesListItem) =>
      a.id - b.id;

    const actualData = treeToList(categoriesTree).slice().sort(sortCb);

    const expectData = categoriesList.slice().sort(sortCb);

    expect(actualData).toEqual(expectData);
  });
});
