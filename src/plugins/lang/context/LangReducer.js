import { LangActions, Langs } from "../constants";

const initialState = { lang: Langs.default };

function initializer() {
  const preferredLang = navigator.language || navigator.userLanguage;

  if (Langs.supportedLangs.includes(preferredLang))
    return { lang: preferredLang };

  const langPart = preferredLang.split("-")[0];
  const defaultLangPart = `${langPart.toLowerCase()}-${langPart.toUpperCase()}`;
  if (Langs.supportedLangs.includes(defaultLangPart))
    return { lang: defaultLangPart };

  return { ...initialState };
}

const defaultAction = {
  type: null,
  payload: { lang: null },
};

function langReducer(state, { type, payload } = defaultAction) {
  switch (type) {
    case LangActions.set:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}

export default langReducer;
export { langReducer, initialState, initializer };
