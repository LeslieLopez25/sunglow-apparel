import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  // Fetches product categories from the backend when the component mounts
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  // Sets up routing for the shop page:
  // - Default route shows all category previews
  // - Dynamic route shows a specific category page
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
