import { ProductAttributeCategory } from "@/api/interface/index";
import http from "@/api";

// 添加产品属性分类
export const createProductAttributeCategory = (params: ProductAttributeCategory.ProductAttributeCategoryModel) => {
  return http.post<ProductAttributeCategory.ProductAttributeCategoryModel[]>(`/productAttributeCategories`, params);
};

// 修改产品属性分类
export const updateProductAttributeCategory = (brand: ProductAttributeCategory.ProductAttributeCategoryModel) => {
  return http.put<ProductAttributeCategory.ProductAttributeCategoryModel[]>(`/productAttributeCategories/${brand.id}`, brand);
};

// 分页查询产品属性分类
export const getProductAttributeCategories = (params: ProductAttributeCategory.ProductAttributeCategoryModel) => {
  return http.get<ProductAttributeCategory.ProductAttributeCategoryModel[]>(`/productAttributeCategories`, params);
};

// 根据id获取产品属性分类
export const getProductAttributeCategory = (id: number) => {
  return http.get<ProductAttributeCategory.ProductAttributeCategoryModel>(`/productAttributeCategories/${id}`);
};

// 根据id删除产品属性分类
export const deleteProductAttributeCategoryApi = (id: number) => {
  return http.delete<ProductAttributeCategory.ProductAttributeCategoryModel>(`/productAttributeCategories/${id}`);
};
