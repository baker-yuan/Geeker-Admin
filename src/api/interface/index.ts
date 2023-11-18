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
  // 分类列表请求
  export interface ReqUserParams extends ReqPage {
  }
  // 分类列表响应
  export interface ResCategoryList {
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