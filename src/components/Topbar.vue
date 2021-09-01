<template>
  <div class="topbar">
    <div class="burger" @click="toggleSidebar">
      <img src="@/assets/icons/hamburger.svg" alt="" />
    </div>
    <div class="searchBar">
      <input
        type="text"
        :placeholder="displayStrings.topbar.inputPlaceholder"
        v-model="city"
        @keyup.enter="handleEnter"
      />
    </div>
    <div class="fav" @click="toggleFavorite">
      <img :src="favoriteIcon" alt="" />
    </div>
  </div>
</template>

<script>
import { Strings } from "@/utils/Strings.js";

export default {
  name: "topbar",
  el: "topbar",

  data() {
    return {
      city: null,
      displayStrings: Strings,
    };
  },

  methods: {
    handleEnter() {
      this.$emit("search", this.city);
    },

    toggleSidebar() {
      this.$emit("sidebar");
    },

    toggleFavorite() {
      if (this.$store.getters.favContainsCurrent) {
        this.$store.dispatch("removeFavorite");
      } else {
        this.$store.dispatch("addFavorite");
      }
    },
  },

  computed: {
    favoriteIcon() {
      if (this.$store.getters.favContainsCurrent) {
        return require("../assets/icons/heart_fill.svg");
      }

      return require("../assets/icons/heart_empty.svg");
    },
  },
};
</script>

<style scoped>
.topbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.burger {
  padding: 0 10px;
}

.searchBar {
  width: 100%;
  margin: 0 auto;
  padding: 10px;
}

.searchBar > input {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  border: none;
  text-align: center;
  font-size: 1rem;
  padding: 5px;
  color: white;
}

.searchBar > input::placeholder {
  color: white;
}

.searchBar > input:focus {
  outline: none;
}

.fav {
  padding: 0 10px;
}
</style>