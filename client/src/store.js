import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const THEMES = {
  dark: "dark",
  light: "light",
};

const THEME_KEY = "theme";

export default new Vuex.Store({
  state: {
    theme:
      localStorage.getItem(THEME_KEY) ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? THEMES.dark
        : THEMES.light,
  },
  mutations: {
    SET_DARK_THEME(state) {
      state.theme = THEMES.dark;
      localStorage.setItem(THEME_KEY, THEMES.dark);
      document.body.classList.remove("light");
    },
    SET_LIGHT_THEME(state) {
      state.theme = THEMES.light;
      localStorage.setItem(THEME_KEY, THEMES.light);
      document.body.classList.add("light");
    },
  },
  actions: {
    toggleTheme({ state, commit }) {
      if (state.theme === "dark") {
        commit("SET_LIGHT_THEME");
      } else {
        commit("SET_DARK_THEME");
      }
    },
  },
  getters: {
    isDarkTheme: (state) => state.theme === THEMES.dark,
    isLightTheme: (state) => state.theme === THEMES.light,
  },
});
