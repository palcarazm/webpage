class AppRoutes {
  constructor() {
    throw new Error(`AppRoutes is a static class and can't be instantiated`);
  }

  static get home() {
    return "/";
  }

  static get projects() {
    return "/projects";
  }
}

export default AppRoutes;
