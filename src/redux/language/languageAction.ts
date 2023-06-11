export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add_language";
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;
interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: "zh" | "en";
}
interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: { name: string; code: string };
}
export const changeLanguageActionCreator = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};
export const addLanguageActionCreator = (name: string, code: string) => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  };
};
