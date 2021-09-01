<template>
  <ErrorPopup :animated="this.animatePopup" />
  <Sidebar
    :isActive="sidebarActive"
    @sidebar="toggleSidebar"
    @search="searchCity"
  />
  <Topbar @search="searchCity" @sidebar="toggleSidebar" />
  <div v-if="cityData !== null" class="mainContent">
    <MainWeather
      :City="this.cityData.city.name"
      :Temp="this.cityData.list[0].main.temp"
      :Humidity="this.cityData.list[0].main.humidity"
      :Clouds="this.cityData.list[0].clouds.all"
      :Wind="this.cityData.list[0].wind.speed"
      :WeatherDescription="this.cityData.list[0].weather[0].main"
    />
    <MoreInfo :dataList="this.cityData.list" />
  </div>
</template>

<script>
import Topbar from "./components/Topbar.vue";
import MainWeather from "./components/MainWeather.vue";
import MoreInfo from "./components/MoreInfo.vue";
import Sidebar from "./components/Sidebar.vue";
import ErrorPopup from "./components/ErrorPopup.vue";
import axios from "axios";

require("dotenv").config();

export default {
  name: "App",

  components: {
    Topbar,
    MainWeather,
    MoreInfo,
    Sidebar,
    ErrorPopup,
  },

  data() {
    return {
      cityData: null,
      sidebarActive: false,
      animatePopup: false,
    };
  },

  created() {
    this.getCurrentWeather();
  },

  methods: {
    getCurrentWeather() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.$store.getters.currentCity}&appid=${process.env.VUE_APP_API_TOKEN}`
        )
        .then((res) => {
          this.cityData = res.data;
        });
    },

    searchCity(city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.VUE_APP_API_TOKEN}`
        )
        .then((res) => {
          this.cityData = res.data;
          this.$store.dispatch("changeCurrentCity", city);
        })
        .catch((res) => {
          this.animate();
          console.log(res);
        });
    },

    toggleSidebar() {
      this.sidebarActive = !this.sidebarActive;
    },

    animate() {
      this.animatePopup = true;
      const self = this;
      setTimeout(function () {
        self.animatePopup = false;
      }, 2000);
    },
  },
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  width: 100%;
  height: 100%;
  background-color: #040541;
}

#app {
  justify-content: center;
  color: white;
}

@media (min-width: 1025px) {
  .mainContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>
