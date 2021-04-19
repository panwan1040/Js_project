    const app = Vue.createApp({
    data() {
        return {

          priced:[40],
            cart: [],
            stocker: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
            this.priced.push(id)
        },
        // solution
        removeById(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                    this.priced.splice(index, 1)
                }
        }
        // solution
    }
})
