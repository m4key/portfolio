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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    buttonIndex: 0,
    buttonClick: undefined,
=======
>>>>>>> master
>>>>>>> week_3
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      if(window.innerWidth < 650) {
        if(this.buttonIndex < this.reviews.length - 2) {
          this.buttonIndex ++;
          this.buttonClick = this.reviews.length - 2;
        }
      } else {
        if(this.buttonIndex < this.reviews.length/2 - 1) {
          this.buttonIndex ++;
          this.buttonClick = this.reviews.length/2 - 1;
        }
      }
=======
>>>>>>> master
>>>>>>> week_3
    },
    
    previous() {
      this.$refs.flickity.previous();
<<<<<<< HEAD
=======
<<<<<<< HEAD
      if(this.buttonIndex > 0) {
        this.buttonIndex --;
      }
=======
>>>>>>> master
>>>>>>> week_3
    }
  },
  created() {
    const data = require('../data/reviews.json')
    this.reviews = this.makeArrWithRequiredImages(data)
    
  }
})