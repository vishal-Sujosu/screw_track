import { Roles } from "../../constants";

export function isAuthorized(user, routeName) {
  if (!user) return false;

  const accessMap = {
    dashboard: [Roles.ADMIN, Roles.TENANT, Roles.MEMBER],
    users: [Roles.ADMIN],
    companies: [Roles.ADMIN],
    billing: [Roles.ADMIN],
    projects: [Roles.TENANT, Roles.ADMIN],
    gis: [Roles.TENANT, Roles.ADMIN],
    clients: [Roles.TENANT, Roles.ADMIN],
    screwactivity: [Roles.MEMBER, Roles.ADMIN],
    'user-management': [Roles.MEMBER, Roles.ADMIN]
  };

  return accessMap[routeName]?.includes(user.role);
}