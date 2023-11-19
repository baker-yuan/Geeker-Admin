import { Category } from "@/api/interface/index";
import http from "@/api";

// 添加商品分类
export const createCategory = (params: Category.CategoryModel) => {
  return http.post<Category.CategoryModel[]>(`/categories`, params);
};

// 修改商品分类
export const updateCategory = (brand: Category.CategoryModel) => {
  return http.put<Category.CategoryModel[]>(`/categories/${brand.id}`, brand);
};

// 分页查询商品分类
export const getCategories = (params: Category.ReqCategoryListParams) => {
  return http.get<Category.CategoryModel[]>(`/categories`, params);
};

// 根据id获取商品分类
export const getCategory = (id: number) => {
  return http.get<Category.CategoryModel>(`/categories/${id}`);
};
