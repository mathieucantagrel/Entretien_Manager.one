<template>
  <div class="moreInfo-day">
    <p>{{ getWeekDay }}</p>
    <div>
      <img :src="getWeatherIcon" alt="" />
      <p>{{ this.WeatherDescription }}</p>
    </div>
    <p>{{ celsius }}°C</p>
  </div>
</template>

<script>
import { weatherIcons } from "@/utils/weatherIcons.js";

export default {
  name: "MoreInfoDay",
  el: "moreInfo-day",

  props: {
    Day: {
      default: null,
    },
    WeatherDescription: {
      default: null,
    },
    Temp: {
      default: 0,
    },
  },

  computed: {
    getWeekDay() {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[new Date(this.Day).getDay()];
    },

    celsius() {
      return parseFloat(this.Temp - 272.15).toFixed(1);
    },

    getWeatherIcon() {
      const weather = this.WeatherDescription;

      return require("../assets/weather/" + weatherIcons[weather]);
    },
  },
};
</script>

<style scoped>
.moreInfo-day {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}

.moreInfo-day > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.moreInfo-day img {
  width: 25px;
  margin: 7px;
}

@media (min-width: 768px) {
  .moreInfo-day p {
    font-size: 1.25rem;
  }
}

@media (min-width: 1025px) {
  .moreInfo-day {
    padding: 5%;
  }
}
</style>