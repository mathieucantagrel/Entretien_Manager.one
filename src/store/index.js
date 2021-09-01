import { createStore } from "vuex";

export default createStore({
  state: {
    currentCity: "paris",
    favCities: ["toulouse"],
  },
  getters: {
    currentCity: (state) => state.currentCity,
    favCities: (state) => state.favCities.map((city) => city),
    favContainsCurrent: function(state) {
      return state.favCities.find((element) => element === state.currentCity);
    },
  },
  mutations: {
    ADD_FAVORITE(state) {
      state.favCities.push(state.currentCity);
    },

    REMOVE_FAVORITE(state) {
      const indexToRemove = state.favCities.indexOf(state.currentCity);
      if (indexToRemove === -1) {
        return;
      }

      state.favCities.splice(indexToRemove, 1);
    },

    CHANGE_CURRENT_CITY(state, city) {
      city = city.toLowerCase();
      state.currentCity = city;
    },
  },
  actions: {
    addFavorite({ commit }) {
      commit("ADD_FAVORITE");
    },

    removeFavorite({ commit }) {
      commit("REMOVE_FAVORITE");
    },

    changeCurrentCity({ commit }, city) {
      commit("CHANGE_CURRENT_CITY", city);
    },
  },
});
