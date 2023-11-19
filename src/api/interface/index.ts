// 请求响应参数（不包含data）
export interface Result {
  code: string;
  msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    access_token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}

// 分类管理模块
export namespace Category {
  // 分类模型
  export interface CategoryModel {
    id: number, // 主键
    parentId: number, // 上级分类的编号：0表示一级分类
    name: string, // 名称
    level: number, // 分类级别：0->1级；1->2级
    productCount: number, // 商品数量
    productUnit: number, // 商品单位
    navStatus: number, // 是否显示在导航栏：0->不显示；1->显示
    showStatus: number, // 显示状态：0->不显示；1->显示
    sort: number, // 排序
    icon: string, // 图标
    keywords: string, // 关键字
    description: string, // 描述
  }
  // 分页查询分类
  export interface ReqCategoryListParams extends ReqPage {
    parentId: number, // 上级分类的编号：0表示一级分类
  }

}


// 品牌管理模块
export namespace Brand {
  // 品牌模型
  export interface BrandModel {
    id: number, // 主键
    name: string, // 名称
    firstLetter: string // 首字母
    sort: number // 排序
    factoryStatus: number // 是否为品牌制造商：0->不是；1->是
    showStatus: number // 是否显示
    productCount: number // 产品数量
    productCommentCount: number // 产品评论数量
    logo: string // 品牌logo
    bigPic: string // 专区大图
    brandStory: string // 品牌故事
  }

  // 分页查询商品品牌
  export interface ReqBrandListParams extends ReqPage {
    name: string, // 名称
  }

}


// 品牌管理模块
export namespace ProductAttributeCategory {
  // 品牌模型
  export interface ProductAttributeCategoryModel {
    id: number, // 主键
    name: string, // 类型名称
    attributeCount: number, // 属性数量
    paramCount: number // 参数数量
  }

  // 分页查询商品品牌
  export interface ReqProductAttributeCategoryListParams extends ReqPage {
    name: string, // 名称
  }

}