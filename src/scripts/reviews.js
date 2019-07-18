import Vue from 'vue';
import Flickity from 'vue-flickity';

const review = {
  template: "#review",
  props: {
    review: Object
  }
}

new Vue({
  el: '#reviews-slider',
  template: '#reviews-template',
  components: {
    Flickity, 
    review
  },
  data: {
    reviews: [],
    flickityOptions: {
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: false,
      groupCells: true,
      lazyLoad: 1,
      cellAlign: 'left'
      // any options from Flickity can be used
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map((item) => {
        const requiredPic = require(`../images/content/${item.avatar}`)
        item.avatar = requiredPic

        return item
      })
    },

    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  created() {
    const data = require('../data/reviews.json')
    this.reviews = this.makeArrWithRequiredImages(data)
    
  }
})