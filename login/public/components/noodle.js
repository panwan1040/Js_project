app.component("noodle", {
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
  
          <p v-if="inStock">สั่งเลย!!</p>
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
          @click="removeFromPriced">
          Remove Item
        </button>
        <!-- solution -->
  
        </div>
      </div>
    </div>`,
  data() {
    return {
      product: "noodle",
      brand: "Menu",
      selectedVariant: 0,
      variants: [
        {
          id: 31,
          name: "ขนมจีนน้ำพริก",
          image: "./assets/images/n1.jpg",
          quantity: 0,
          price: 40,
        },
        {
          id: 32,
          name: "ก๋วยเตี๋ยวไก่ตุ๋นมะระ",
          image: "./assets/images/n2.jpg",
          quantity: 50,
          price: 40,
        },
        {
          id: 33,
          name: "ก๋วยเตี๋ยวเรือ",
          image: "./assets/images/n3.jpg",
          quantity: 50,
          price: 30,
        },
        {
          id: 34,
          name: "ก๋วยเตี๋ยวเป็ด",
          image: "./assets/images/n4.jpg",
          quantity: 5,
          price: 35,
        },
        {
          id: 35,
          name: "ผัดวุ้นเส้นเกาหลี",
          image: "./assets/images/n5.jpg",
          quantity: 50,
          price: 35,
        },
        {
          id: 36,
          name: "ขนมจีนผัดขี้เมากุ้ง",
          image: "./assets/images/n6.jpg",
          quantity: 50,
          price: 30,
        },
        {
          id: 37,
          name: "สปาเกตตีเพสโต้ซอส",
          image: "./assets/images/n7.jpg",
          quantity: 50,
          price: 30,
        },
        {
          id: 38,
          name: "หมี่ยำกุ้งสด",
          image: "./assets/images/n8.jpg",
          quantity: 50,
          price: 60,
        },
        {
          id: 39,
          name: "สปาเกตตีผัดต้มยำกุ้ง",
          image: "./assets/images/n9.jpg",
          quantity: 50,
          price: 80,
        },
        {
          id: 310,
          name: "ผัดหมี่ซั่วทะเล",
          image: "./assets/images/n10.jpg",
          quantity: 50,
          price: 50,
        },
        {
          id: 311,
          name: "ยำขนมจีน",
          image: "./assets/images/n11.jpg",
          quantity: 50,
          price: 55,
        },
        {
          id: 312,
          name: "ผัดไทยกุ้งสดห่อไข่",
          image: "./assets/images/n12.jpg",
          quantity: 50,
          price: 55,
        },
        {
          id: 313,
          name: "สปาเก็ตตี้ปลาหม฿กผัดไข่เค็ม",
          image: "./assets/images/n13.jpg",
          quantity: 50,
          price: 55,
        },
        {
          id: 314,
          name: "เฝอเนื้อ",
          image: "./assets/images/n14.jpg",
          quantity: 50,
          price: 30,
        },
        {
          id: 315,
          name: "ก๋วยจั๊บน้ำข้นหมูกรอบ",
          image: "./assets/images/n15.jpg",
          quantity: 50,
          price: 40,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].name);
      // this.$emit('add-to-cart', this.variants[this.selectedVariant].price)
    },
    addToPriced() {
      this.$emit("add-to-priced", this.variants[this.selectedVariant].price);
    },
    // solution
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].name);
      // this.$emit('remove-from-cart', this.variants[this.selectedVariant].price)
    },
    removeFromPriced() {
      this.$emit(
        "remove-from-priced",
        this.variants[this.selectedVariant].price
      );
    },

    // solution

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
