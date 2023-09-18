import { ThemeActions, Themes } from "../constants";
import { ThemeLocalStorageService } from "../service";

const initialState = { theme: Themes.default };

function initializer() {
  const theme = ThemeLocalStorageService.getTheme();
  if (theme) {
    return theme;
  } else {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      ?.matches
      ? Themes.dark
      : Themes.light;

    return { ...initialState, theme: preferredTheme };
  }
}

const defaultAction = {
  type: null,
  payload: { theme: null },
};

function themeReducer(state, { type, payload } = defaultAction) {
  switch (type) {
    case ThemeActions.set:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}

export default themeReducer;
export { themeReducer, initialState, initializer };
