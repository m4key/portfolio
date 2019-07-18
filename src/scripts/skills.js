import Vue from 'vue';

const talent = {
  template: "#talent",
  props: {
    talentName: String,
    talentPercent: Number
  },
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      console.log("dashArray");
      const percent = (dashArray / 100) * (100 - this.talentPercent);

      circle.style.strokeDashoffset = percent;
    }
  },   
  mounted() {
    this.drawColoredCircle();
  }
};

const item = {
  template: "#ability-item",
  components: {
    talent
  },
  props: {
    talent: Object
  }
};

new Vue({
  el: "#ability-container",
  template: "#ability-list",
  components: {
    item
  },
  data() {
    return {
      talents: {}
    };
  },
  created() {
    const data = require("../data/talents.json");
    this.talents = data;
  }
});