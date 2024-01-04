import { CategoriesListItem, CategoriesTreeItem } from './types';

export const categoriesList: CategoriesListItem[] = [
  { id: 4, name: 'Sub Category 1 of Category 1', parentId: 1 },
  { id: 5, name: 'Sub Category 2 of Category 1', parentId: 1 },
  { id: 6, name: 'Sub Category 3 of Category 1', parentId: 1 },
  {
    id: 7,
    name: 'Sub Category 1 of Sub Category 1 of Category 1',
    parentId: 4,
  },
  {
    id: 8,
    name: 'Sub Category 2 of Sub Category 1 of Category 1',
    parentId: 4,
  },
  { id: 3, name: 'Category 3', parentId: null },
  { id: 2, name: 'Category 2', parentId: null },
  { id: 1, name: 'Category 1', parentId: null },
];

export const categoriesTree: CategoriesTreeItem[] = [
  { id: 3, name: 'Category 3', parentId: null, categories: [] },
  { id: 2, name: 'Category 2', parentId: null, categories: [] },
  {
    id: 1,
    name: 'Category 1',
    parentId: null,
    categories: [
      {
        id: 4,
        name: 'Sub Category 1 of Category 1',
        parentId: 1,
        categories: [
          {
            id: 7,
            name: 'Sub Category 1 of Sub Category 1 of Category 1',
            parentId: 4,
            categories: [],
          },
          {
            id: 8,
            name: 'Sub Category 2 of Sub Category 1 of Category 1',
            parentId: 4,
            categories: [],
          },
        ],
      },
      {
        id: 5,
        name: 'Sub Category 2 of Category 1',
        parentId: 1,
        categories: [],
      },
      {
        id: 6,
        name: 'Sub Category 3 of Category 1',
        parentId: 1,
        categories: [],
      },
    ],
  },
];
