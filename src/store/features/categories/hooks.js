import { useSelector } from "react-redux";


export const useCategory = () => useSelector(state => state.categories.category)
export const useCategories = () => useSelector(state => state.categories.categories)