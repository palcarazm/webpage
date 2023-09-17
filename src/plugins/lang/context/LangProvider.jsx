import { useMemo, useReducer } from "react";
import { langReducer, initialState, initializer } from "./LangReducer";
import { LangActions, Langs } from "../constants";
import LangContext from "./LangContext";

function LangProvider({ children }) {
  const [langState, langDispatcher] = useReducer(
    langReducer,
    initialState,
    initializer
  );
  function es() {
    langDispatcher({ type: LangActions.set, payload: { lang: Langs.es } });
  }

  function fr() {
    langDispatcher({ type: LangActions.set, payload: { lang: Langs.fr } });
  }

  return (
    <LangContext.Provider
      value={useMemo(
        () => ({ langState, es, fr }),
        [langState, langDispatcher]
      )}
    >
      {children}
    </LangContext.Provider>
  );
}
export default LangProvider;
