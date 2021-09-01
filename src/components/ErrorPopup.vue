<template>
  <div class="popup-error" :class="{ animated: animated }">
    <img src="@/assets/icons/error.svg" alt="" />
    <span>{{ this.displayStrings.message }}</span>
  </div>
</template>

<script>
import { Strings } from "@/utils/Strings.js";

export default {
  name: "ErrorPopup",
  el: "popup-error",

  data() {
    return {
      displayStrings: Strings.errorPopup,
    };
  },

  props: {
    animated: {
      default: false,
    },
  },
};
</script>

<style>
.popup-error {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 25%;
  right: 25%;
  padding: 7px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 0px 5px 15px 0px rgba(3, 3, 42, 0.5);
  transition: all 0.3s;
  transform: translateY(-200%);
}

.animated {
  transform: translateY(0);
}

.popup-error > img {
  margin-right: 5px;
}
</style>