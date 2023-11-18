import { Brand } from "@/api/interface/index";
import http from "@/api";

// 添加商品品牌
export const createBrand = (params: Brand.BrandModel) => {
  return http.post<Brand.BrandModel[]>(`/brand`, params);
};

// 修改商品品牌
export const updateBrand = (brand: Brand.BrandModel) => {
  return http.put<Brand.BrandModel[]>(`/brand/${brand.id}`, brand);
};

// 分页查询商品品牌
export const getBrands = (params: Brand.ReqBrandListParams) => {
  return http.get<Brand.BrandModel[]>(`/brands`, params);
};
