export default {
  path: "/admin",
  name: "admin",
  component: () => import("../pages/admin/Admin.vue"),
  children: [
    {
      path: "/category",
      name: "category",
      component: () => import("../pages/admin/Category.vue"),
    },
    {
      path: "/product_brand",
      name: "product_brand",
      component: () => import("../pages/admin/Brand.vue"),
    },
    {
      path: "/product_model",
      name: "product_model",
      component: () => import("../pages/admin/Model.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../pages/admin/Product.vue"),
    },
    {
      path: "/images",
      name: "images",
      component: () => import("../pages/admin/Images.vue"),
    },
    {
      path: "/admin_profile",
      name: "profile",
      component: () => import("../pages/admin/Profile.vue"),
    },
    {
      path: "/product_in_stock",
      name: "product_in_stock",
      component: () => import("../pages/admin/ProductStock.vue"),
    },
    {
      path: "/product_information",
      name: "product_information",
      component: () => import("../pages/admin/ProductInfo.vue"),
    },
    {
      path: "/performance",
      name: "performance",
      component: () => import("../pages/admin/Performance.vue"),
    },
    {
      path: "/product_category_brand",
      name: "product_category_brand",
      component: () => import("../pages/admin/ProCategoryBrand.vue"),
    },
    {
      path: "/product_performance_group",
      name: "product_performance_group",
      component: () => import("../pages/admin/ProPerformanceGroup.vue"),
    },
  ],
};
