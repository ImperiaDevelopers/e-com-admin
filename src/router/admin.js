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
  ],
};
