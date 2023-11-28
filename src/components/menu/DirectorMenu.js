import {
  mdiAccount,
  mdiAccountBox,
  mdiAccountCog,
  mdiAccountGroup,
  mdiAccountMultiplePlus,
  mdiBook,
  mdiDoorOpen,
} from "@mdi/js";

export const DirectorMenu = [
  {
    path: "/staffs",
    label: "Staffs",
    name: "staffs",
    icon: mdiAccountMultiplePlus,
  },
  {
    path: "/roles",
    label: "Roles",
    name: "roles",
    icon: mdiAccountBox,
  },
  {
    path: "/profile",
    label: "Profile",
    name: "profile",
    icon: mdiAccountCog,
  },
];
