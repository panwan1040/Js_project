const app = Vue.createApp({
  data() {
    return {
      sum: 0,
      priced: [],
      cart: [],
      stocker: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    updatePriced(price) {
      this.priced.push(price);
    },
    // solution
    removeById(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },

    // solution
  },
});
