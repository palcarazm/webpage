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

  static get cv() {
    return "/cv";
  }
}

export default AppRoutes;
