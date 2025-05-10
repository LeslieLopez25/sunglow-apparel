export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}

// Represents an individual item within a category
export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

// Represents a product category with a title, image, and list of items
export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

// Maps category titles (as lowercase strings) to their respective items
export type CategoryMap = {
  [key: string]: CategoryItem[];
};
