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
export default (state=defaultState, aciont) => {
  return state;
};
