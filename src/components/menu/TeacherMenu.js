import {
  mdiAccount,
  mdiAccountBox,
  mdiAccountCog,
  mdiAccountGroup,
  mdiAccountMultiplePlus,
  mdiBook,
  mdiDoorOpen,
} from "@mdi/js";

export const TeacherMenu = [
  {
    path: "/teacher_groups",
    label: "Groups",
    name: "teacher_groups",
    keys:'teacher_single_group',
    icon: mdiAccountGroup,
  },
  {
    path: "/profile",
    label: "Profile",
    name: "profile",
    icon: mdiAccountCog,
  },
];
