<template>
  <div class="moreInfo">
    <div v-for="index in 4" :key="index">
      <MoreInfoDay
        :Day="this.dataList[index * 8].dt_txt"
        :Temp="this.dataList[index * 8].main.temp"
        :WeatherDescription="this.dataList[index * 8].weather[0].main"
      />
    </div>
    <MoreInfoDay
      :Day="this.dataList[this.dataList.length - 1].dt_txt"
      :Temp="this.dataList[this.dataList.length - 1].main.temp"
      :WeatherDescription="
        this.dataList[this.dataList.length - 1].weather[0].main
      "
    />
  </div>
</template>

<script>
import MoreInfoDay from "./MoreInfoDay.vue";

export default {
  name: "MoreInfo",
  el: "moreInfo",

  props: {
    dataList: {
      default: null,
    },
  },

  components: {
    MoreInfoDay,
  },
};
</script>

<style scoped>
.moreInfo {
  margin: 20px 0;
  padding: 0 20px;
}
</style>