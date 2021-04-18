app.component('fastfood', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

      <table>
      <tr>
      <td v-for="(variant, index) in variants">
        <div 
           
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundImage: 'url(' + variant.image + ')' } ">
        </div>
        </td>
        </tr>
        </table>


        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

        <!-- solution -->
        <button 
        class="button" 
        :class="{ disabledButton: !inStock }" 
        :disabled="!inStock" 
        @click="removeFromCart">
        Remove Item
      </button>
      <!-- solution -->

      </div>
    </div>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 1, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 2, color: 'blue', image: './assets/images/dog.jpg', quantity: 0 },
          { id: 3, color: 'blue', image: './assets/images/koala.jpg', quantity: 0 },
          { id: 4, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 5, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 6, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 7, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 8, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 9, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 10, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 11, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 12, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 13, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 14, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 15, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
      },
      // solution
      updateVariant(index) {
          this.selectedVariant = index
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
}),/////////////////////////////////////////////////////////////////////////////////////////////////
app.component('rice', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

      <table>
      <tr>
      <td v-for="(variant, index) in variants">
        <div 
           
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundImage: 'url(' + variant.image + ')' } ">
        </div>
        </td>
        </tr>
        </table>


        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

        <!-- solution -->
        <button 
        class="button" 
        :class="{ disabledButton: !inStock }" 
        :disabled="!inStock" 
        @click="removeFromCart">
        Remove Item
      </button>
      <!-- solution -->

      </div>
    </div>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 16, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 17, color: 'green', image: './assets/images/dog.jpg', quantity: 0 },
          { id: 18, color: 'green', image: './assets/images/koala.jpg', quantity: 0 },
          { id: 19, color: 'green', image: './assets/images/socks_green.jpg', quantity: 0 },
          { id: 20, color: 'blue', image: './assets/images/socks_green.jpg', quantity: 0 },
          { id: 21, color: 'blue', image: './assets/images/socks_green.jpg', quantity: 0 },
          { id: 22, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 23, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 24, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 25, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 26, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 27, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 28, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 29, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 30, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
      },
      // solution
      updateVariant(index) {
          this.selectedVariant = index
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
}),//////////////////////////////////////////////////////////////////////////////////////////
app.component('noodle', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

      <table>
      <tr>
      <td v-for="(variant, index) in variants">
        <div 
           
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundImage: 'url(' + variant.image + ')' } ">
        </div>
        </td>
        </tr>
        </table>


        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

        <!-- solution -->
        <button 
        class="button" 
        :class="{ disabledButton: !inStock }" 
        :disabled="!inStock" 
        @click="removeFromCart">
        Remove Item
      </button>
      <!-- solution -->

      </div>
    </div>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 31, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 32, color: 'green', image: './assets/images/dog.jpg', quantity: 0 },
          { id: 33, color: 'green', image: './assets/images/dog.jpg', quantity: 0 },
          { id: 34, color: 'green', image: './assets/images/dog.jpg', quantity: 0 },
          { id: 35, color: 'blue', image: './assets/images/dog.jpg', quantity: 0 },
          { id: 36, color: 'blue', image: './assets/images/socks_green.jpg', quantity: 0 },
          { id: 37, color: 'blue', image: './assets/images/dog.jpg', quantity: 0 },
          { id: 38, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 39, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 40, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 41, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 42, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 43, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 44, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          { id: 45, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
      },
      // solution
      updateVariant(index) {
          this.selectedVariant = index
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
}),///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.component('showcart', {

  cart

})
