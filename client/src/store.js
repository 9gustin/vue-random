import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const THEMES = {
  dark: 'dark',
  light: 'light'
}

const THEME_KEY = 'theme'

export default new Vuex.Store({
  state: {
    theme: localStorage.getItem(THEME_KEY) || THEMES.dark,
  },
  mutations: {
    SET_DARK_THEME(state) {
      state.theme = THEMES.dark
      localStorage.setItem(THEME_KEY, THEMES.dark)
    },
    SET_LIGHT_THEME(state) {
      state.theme = THEMES.light
      localStorage.setItem(THEME_KEY, THEMES.light)
    }
  },
  actions: {
    toggleTheme({state, commit}) {
      if (state.theme === 'dark') {
        commit('SET_LIGHT_THEME')
      } else {
        commit('SET_DARK_THEME')
      }
    }
  },
  getters: {
    isDarkTheme: state => state.theme === THEMES.dark,
    isLightTheme: state => state.theme === THEMES.light
  }
});
