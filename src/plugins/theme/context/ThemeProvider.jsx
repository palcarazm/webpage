import { useEffect, useMemo, useReducer } from "react";
import { themeReducer, initialState, initializer } from "./ThemeReducer";
import { ThemeActions, Themes } from "../constants";
import ThemeContext from "./ThemeContext";
import { ThemeLocalStorageService } from "../service";

function ThemeProvider({ children }) {
  const [themeState, themeDispatcher] = useReducer(
    themeReducer,
    initialState,
    initializer
  );
  useEffect(() => {
    document
      ?.querySelector("body")
      ?.setAttribute("data-bs-theme", themeState.theme);
    return () => {};
  }, [themeState]);

  function setTheme(theme) {
    if (Themes.supported.includes(theme)) {
      themeDispatcher({ type: ThemeActions.set, payload: { theme } });
      ThemeLocalStorageService.setTheme({ theme });
    }
  }
  function toggleTheme() {
    setTheme(themeState.theme === Themes.light ? Themes.dark : Themes.light);
  }

  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({ themeState, toggleTheme }),
        [themeState, themeDispatcher]
      )}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
