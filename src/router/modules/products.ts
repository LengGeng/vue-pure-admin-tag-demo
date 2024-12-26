export default {
  path: "/products",
  name: "Products",
  redirect: "/products/list",
  meta: {
    title: "商品管理",
    icon: "ep:goods",
    rank: 2
  },
  children: [
    {
      path: "/products/list",
      name: "ProductList",
      component: () => import("@/pages/Products/ProductList.vue"),
      meta: {
        title: "商品管理",
        icon: "ep:goods",
        keepAlive: true
      }
    },
    {
      path: "/products/detail/:pid",
      name: "ProductDetail",
      component: () => import("@/pages/Products/ProductDetail.vue"),
      meta: {
        title: "商品详情",
        icon: "ep:sell",
        showLink: false,
        activePath: "/products/list"
      }
    },
    {
      path: "/products/edit/:pid",
      name: "ProductEdit",
      component: () => import("@/pages/Products/ProductEdit.vue"),
      meta: {
        title: "编辑商品",
        icon: "ep:sell",
        showLink: false,
        activePath: "/products/list"
      }
    }
  ]
} satisfies RouteConfigsTable;
