import {
  mdiImageArea,
  mdiAccountCog,
  mdiApple,
  mdiDoorOpen,
  mdiFormatListGroup,
  mdiTelevision,
  mdiSale,
  mdiInformationBoxOutline,
  mdiChartLineVariant,
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
    path: "/images",
    label: "Images",
    name: "images",
    icon: mdiImageArea,
  },
  {
    path: "/product_in_stock",
    label: "ProductInStock",
    name: "product_in_stock",
    icon: mdiSale,
  },
  {
    path: "/product_information",
    label: "ProductInformation",
    name: "product_information",
    icon: mdiInformationBoxOutline,
  },
  {
    path: "/performance",
    label: "Performance",
    name: "performance",
    icon: mdiChartLineVariant,
  },
  {
    path: "/admin_profile",
    label: "Profile",
    name: "admin_profile",
    icon: mdiAccountCog,
  },
];
