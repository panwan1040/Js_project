app.component("bubletea", {
  props: {
    stocker: {
      type: Boolean,
      required: true,
    },
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

        <p v-if="inStock">สั่งเลย!!!</p>
        <p v-else>น้ำหมดจ้า</p>

        <p>เมนู : {{ shipping }}</p>
        <p>ราคา : {{ pr }}</p>
        

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
          class="button-add" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart"
          v-on:click="addToPriced">
          Add to Cart
        </button>

        <!-- solution -->
        <button 
        class="button-re" 
        :class="{ disabledButton: !inStock }" 
        :disabled="!inStock" 
        @click="removeFromCart"
        @click="removeFromPriced"
        
        >
        Remove Item
      </button>
      <!-- solution -->

      </div>
    </div>
  </div>`,
  data() {
    return {
      product: "tea",
      brand: "Menu",
      selectedVariant: 0,
      variants: [
        {
          id: 11,
          name: "ชาแดงบ๊วย",
          image: "./assets/images/t1.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 12,
          name: "ชาแดงพีช",
          image: "./assets/images/t2.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 13,
          name: "ชาแดงองุ่น",
          image: "./assets/images/t3.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 14,
          name: "ชาเขียวลิ้นจี่",
          image: "./assets/images/t4.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 15,
          name: "ชาเขียวแอปเปิ้ล",
          image: "./assets/images/t5.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 16,
          name: "ชาเขียวกีวี",
          image: "./assets/images/t6.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 17,
          name: "ชาเขียวโยเกิร์ต",
          image: "./assets/images/t7.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 18,
          name: "ชานมกาแฟ",
          image: "./assets/images/t8.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 19,
          name: "ชานมเผือก",
          image: "./assets/images/t9.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 110,
          name: "ชานมแคนตาลูป",
          image: "./assets/images/t10.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 111,
          name: "ชาเขียวนม",
          image: "./assets/images/t11.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 112,
          name: "ชาแดง",
          image: "./assets/images/t12.jpg",
          quantity: 50,
          price: 19,
        },
        {
          id: 113,
          name: "ชาเขียวเสาวรส",
          image: "./assets/images/t13.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 114,
          name: "ชาเขียวสับปะรด",
          image: "./assets/images/t14.jpg",
          quantity: 50,
          price: 24,
        },
        {
          id: 115,
          name: "ชาเขียวบลูเบอร์รี่",
          image: "./assets/images/t15.jpg",
          quantity: 50,
          price: 24,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].name);
    },
    addToPriced() {
      this.$emit("add-to-priced", this.variants[this.selectedVariant].price);
    },
    // solution
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].name);
    },
    removeFromPriced() {
      this.$emit(
        "remove-from-priced",
        this.variants[this.selectedVariant].price
      );
    },
    // solution
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    pr() {
      return this.variants[this.selectedVariant].price;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.stocker) {
        return this.variants[this.selectedVariant].name;
      }
    },
  },
}); /////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
