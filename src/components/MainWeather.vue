<template>
  <div class="mainWeather">
    <div class="globalWeather">
      <img :src="getWeatherIcon" alt="" />
      <div>
        <p class="mainTemp">
          {{ this.celsius }}{{ this.DisplayStrings.mainWeather.unit }}
        </p>
        <p class="city">{{ this.City }}</p>
      </div>
    </div>
    <div class="subInfo-container">
      <div clasS="subInfo">
        <img src="@/assets/icons/wind.svg" alt="" />
        <div>
          <p>
            {{ this.Wind }}
            {{ this.DisplayStrings.mainWeather.subInfoFirst.unit }}
          </p>
          <p>{{ this.DisplayStrings.mainWeather.subInfoFirst.message }}</p>
        </div>
      </div>
      <div class="subInfo">
        <img src="@/assets/icons/humidity.svg" alt="" />
        <div>
          <p>
            {{ this.Humidity }}
            {{ this.DisplayStrings.mainWeather.subInfoSecond.unit }}
          </p>
          <p>{{ this.DisplayStrings.mainWeather.subInfoSecond.message }}</p>
        </div>
      </div>
      <div class="subInfo">
        <img src="@/assets/icons/cloud.svg" alt="" />
        <div>
          <p>
            {{ this.Clouds }}
            {{ this.DisplayStrings.mainWeather.subInfoThird.unit }}
          </p>
          <p>{{ this.DisplayStrings.mainWeather.subInfoThird.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { weatherIcons } from "@/utils/weatherIcons.js";
import { Strings } from "@/utils/Strings.js";

export default {
  name: "MainWeather",
  el: "mainWeather",

  data() {
    return {
      DisplayStrings: Strings,
    };
  },

  props: {
    City: {
      default: null,
    },
    Temp: {
      default: 0,
    },
    Wind: {
      default: 0,
    },
    Humidity: {
      default: 0,
    },
    Clouds: {
      default: 0,
    },
    WeatherDescription: {
      default: null,
    },
  },

  computed: {
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
.mainWeather {
  width: 90%;
  margin: 0 auto;
  background: linear-gradient(225deg, #42d6f3 0%, #0d82c3 100%);
  box-shadow: 0px 0px 16px 4px rgba(28, 117, 182, 0.52);
  border-radius: 20px;
  justify-content: center;
  padding: 10px;
}

.globalWeather {
  width: 100%;
  height: 100%;
}

.globalWeather img {
  width: 70%;
  height: 70%;
  display: block;
  margin: 0 auto;
}

.globalWeather p {
  text-align: center;
}

.mainTemp {
  font-size: 64px;
}

.city {
  font-size: 24px;
}

.subInfo-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.subInfo {
  width: 25%;
  padding: 10px;
  margin-top: 10px;
}

.subInfo img {
  display: block;
  margin: 10px auto;
  height: 19px;
}

.subInfo p {
  text-align: center;
}

.subInfo p:nth-child(2) {
  color: black;
}

@media (min-width: 481px) {
  .mainWeather {
    width: 75%;
  }
}

@media (min-width: 769px) {
  .mainWeather {
    width: 65%;
  }

  .globalWeather img {
    width: 40%;
    height: 40%;
  }

  .subInfo img {
    height: 32px;
  }
}

@media (min-width: 1025px) {
  .mainWeather {
    margin: 0;
  }

  .globalWeather {
    height: 60%;
  }
}
</style>