app.component("rice", {
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
  
          <p v-if="inStock">{{ shipping }}</p>
          <p v-else>วัตถุดิบหมดจ้า</p>
  
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
      product: "rice",
      brand: "Menu",
      selectedVariant: 0,
      variants: [
        {
          id: 21,
          name: "ข้าวผัดปู",
          image: "./assets/images/r1.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 22,
          name: "ข้าวผัดทะเล",
          image: "./assets/images/r2.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 23,
          name: "ข้าวผัดต้มยำ",
          image: "./assets/images/r3.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 24,
          name: "ข้าวผัดกุ้ง",
          image: "./assets/images/r4.jpg",
          quantity: 5,
          price: 40,
        },
        {
          id: 25,
          name: "ข้าวผัดหมูยอ",
          image: "./assets/images/r5.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 26,
          name: "ข้าวผัดมันกุ้ง",
          image: "./assets/images/r6.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 27,
          name: "ข้าวหมูกระเทียม",
          image: "./assets/images/r7.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 28,
          name: "กุ้งผัดกระเทียมราดข้าว",
          image: "./assets/images/r8.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 29,
          name: "ข้าวผัดพริกแกงหมู",
          image: "./assets/images/r9.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 210,
          name: "ผัดกะเพราเนื้อไข่ดาว",
          image: "./assets/images/r10.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 211,
          name: "ข้าวไข่เจียว",
          image: "./assets/images/r11.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 212,
          name: "ข้าวผัดญี่ปุ่น",
          image: "./assets/images/r12.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 213,
          name: "ข้าวผัดแหนม",
          image: "./assets/images/r13.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 214,
          name: "ข้าวผัดปูก้อน",
          image: "./assets/images/r14.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 215,
          name: "ข้าวผัดกะปิ",
          image: "./assets/images/r15.jpg",
          quantity: 50,
          price: 40,
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
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    pr() {
      return this.variants[this.selectedVariant].price;
    },
    shipping() {
      if (this.stocker) {
        return this.variants[this.selectedVariant].name;
      }
    },
  },
});
