import {
  mdiAccount,
  mdiAccountCog,
  mdiApple,
  mdiDoorOpen,
  mdiFormatListGroup,
  mdiTelevision,
} from "@mdi/js";

export const AdminMenu = [
  {
    path: "/product",
    label: "Product",
    name: "product",
    icon: mdiTelevision,
  },
  {
    path: "/category",
    label: "Category",
    name: "category",
    icon: mdiFormatListGroup,
  },
  {
    path: "/product_model",
    label: "Model",
    name: "product_model",
    icon: mdiDoorOpen,
  },
  {
    path: "/product_brand",
    label: "Brand",
    name: "product_brand",
    icon: mdiApple,
  },
  {
    path: "/product_in_stock",
    label: "ProductInStock",
    name: "product_in_stock",
    icon: mdiApple,
  },
];
