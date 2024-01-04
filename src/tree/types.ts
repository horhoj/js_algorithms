export interface CategoriesListItem {
  id: number;
  name: string;
  parentId: number | null;
}

export interface CategoriesTreeItem {
  id: number;
  name: string;
  parentId: number | null;
  categories: CategoriesTreeItem[];
}
