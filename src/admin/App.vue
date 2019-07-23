<template lang="pug">
  div
    admin
</template>

<script>
import admin from "./component/admin"
  export default {
    name: "app",
    components: {
      admin
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="postcss" >
  @import "normalize.css";
  @import url('../styles/mixins');
	@import url('../styles/layout/base');

.wrapper {
  min-height: 100%;
}

.content {
  background-color: rgba(255, 255, 255, 0.9);
  background: url("./../images/content/admin-bg.jpg");
  grid-area: content;
}

</style>