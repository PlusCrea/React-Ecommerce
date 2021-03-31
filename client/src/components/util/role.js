export const Role = {
  SuperAdmin: "SuperAdmin",
  Admin: "Admin",
  Organizer: "Organizer",
  User: "User",
};

export const RoleInUserTypes = {
  SuperAdmin: ["SuperAdmin"],
  Admin: ["SuperAdmin", "Admin"],
  Organizer: ["SuperAdmin", "Admin", "Organizer"],
  User: ["SuperAdmin", "Admin", "Organizer", "User"],
};

export const PageInRoles = {
  AddEditMark: [Role.Admin],
  ListType: [Role.SuperAdmin, Role.Admin],
  ListModel: [Role.User],
  AddEditModel: [Role.Admin, Role.Organizer, Role.User],
};
