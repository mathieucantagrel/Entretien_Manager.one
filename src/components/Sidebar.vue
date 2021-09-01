<template>
  <div class="sidebar" :class="{ sidebar_not_active: !isActive }">
    <div class="sidebar-close" @click="toggleSidebar">
      <h1>{{ this.displayStrings.sidebar.title }}</h1>
      <img src="@/assets/icons/close.svg" alt="" />
    </div>
    <div v-for="city in favCitiesList" :key="city">
      <div class="favCity" @click="handleFav(city)">
        <h2>{{ city }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { Strings } from "@/utils/Strings.js";

export default {
  name: "Sidebar",
  el: "sidebar",

  data() {
    return {
      displayStrings: Strings,
    };
  },

  props: {
    isActive: {
      default: false,
    },
  },

  computed: {
    favCitiesList() {
      const list = this.$store.getters.favCities;
      console.log(list);
      return list;
    },
  },

  methods: {
    toggleSidebar() {
      this.$emit("sidebar");
    },

    handleFav(city) {
      this.toggleSidebar();
      this.search(city);
    },

    search(city) {
      this.$emit("search", city);
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(206.57deg, #0077b6 16.67%, #040541 100%);
  transition: all 0.3s;
  overflow-y: scroll;
}

.sidebar-close {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px #efefef solid;
}

.sidebar_not_active {
  transform: translatex(-100%);
}

.favCity {
  text-align: center;
  padding: 5px 0;
  text-transform: capitalize;
  border-bottom: 2px #efefef solid;
}

.favCity:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>