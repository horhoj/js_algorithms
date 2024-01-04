import { CategoriesListItem, CategoriesTreeItem } from './types';

export function listToTree(list: CategoriesListItem[]) {
  const map: Record<number, number> = {};
  const clone: CategoriesTreeItem[] = [];
  const result: CategoriesTreeItem[] = [];

  for (let i = 0; i < list.length; i++) {
    const currentListItem = list[i];
    map[currentListItem.id] = i;
    clone.push({ ...currentListItem, categories: [] });
  }

  for (let i = 0; i < list.length; i++) {
    const currentTreeItem = clone[i];
    if (currentTreeItem.parentId === null) {
      result.push(currentTreeItem);
    } else {
      const parentIdx = map[currentTreeItem.parentId];
      const parent = clone[parentIdx];
      parent.categories.push(currentTreeItem);
    }
  }
  return result;
}

export function treeToList(tree: CategoriesTreeItem[]): CategoriesListItem[] {
  const result: CategoriesListItem[] = [];
  const stack: CategoriesTreeItem[] = [...tree];

  while (stack.length > 0) {
    const current = stack.shift();

    if (current) {
      result.push({
        id: current.id,
        name: current.name,
        parentId: current.parentId,
      });
      current.categories.forEach((el) => {
        stack.unshift(el);
      });
    }
  }

  return result;
}
