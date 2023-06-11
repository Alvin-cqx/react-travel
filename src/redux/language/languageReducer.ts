import {CHANGE_LANGUAGE,ADD_LANGUAGE,LanguageActionTypes} from './languageAction'

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    {
      name: "中文",
      code: "zh",
    },
    {
      name: "Englisth",
      code: "en",
    },
  ],
};
const languageReducer = (state = defaultState, action:LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      // i18n.changeLanguage(action.payload); // 这样处理是不标准的，有副作用
      return { ...state, language: action.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
    default:
      return state;
  }
};
export default languageReducer;
