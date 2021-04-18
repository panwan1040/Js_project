app.component('bubletea', {
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

        <p v-if="inStock">{{ shipping }}</p>
        <p v-else>วัตถุดิบหมดจ้า</p>

        <p>เมนู : {{ shipping }}</p>
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
        product: 'tea',
        brand: 'menu',
        selectedVariant: 0,
        variants: [
          { id: 1, color: 'ชาแดงบ๊วย', image: './assets/images/t1.jpg', quantity: 50 },
          { id: 2, color: 'ชาแดงพีช', image: './assets/images/t2.jpg', quantity: 50 },
          { id: 3, color: 'ชาแดงองุ่น', image: './assets/images/t3.jpg', quantity: 50 },
          { id: 4, color: 'ชาเขียวลิ้นจี่', image: './assets/images/t4.jpg', quantity: 50 },
          { id: 5, color: 'ชาเขียวแอปเปิ้ล', image: './assets/images/t5.jpg', quantity: 50 },
          { id: 6, color: 'ชาเขียวกีวี', image: './assets/images/t6.jpg', quantity: 50 },
          { id: 7, color: 'ชาเขียวโยเกิร์ต', image: './assets/images/t7.jpg', quantity: 50 },
          { id: 8, color: 'ชานมกาแฟ', image: './assets/images/t8.jpg', quantity: 50 },
          { id: 9, color: 'ชานมเผือก', image: './assets/images/t9.jpg', quantity: 50 },
          { id: 10, color: 'ชานมแคนตาลูป', image: './assets/images/t10.jpg', quantity: 50 },
          { id: 11, color: 'ชาเขียวนม', image: './assets/images/t11.jpg', quantity: 50 },
          { id: 12, color: 'ชาแดง', image: './assets/images/t12.jpg', quantity: 50 },
          { id: 13, color: 'ชาเขียวเสาวรส', image: './assets/images/t13.jpg', quantity: 50 },
          { id: 14, color: 'ชาเขียวสับปะรด', image: './assets/images/t14.jpg', quantity: 50 },
          { id: 15, color: 'ชาเขียวบลูเบอร์รี่', image: './assets/images/t15.jpg', quantity: 50 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].color)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].color)
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
          return this.variants[this.selectedVariant].color
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

        <p v-if="inStock">{{ shipping }}</p>
        <p v-else>วัตถุดิบหมดจ้า</p>

        <p>เมนู : {{ shipping }}</p>
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
        product: 'rice',
        brand: 'menu',
        selectedVariant: 0,
        variants: [
          { id: 16, color: 'ข้าวผัดปู', image: './assets/images/r1.jpg', quantity: 50 },
          { id: 17, color: 'ข้าวผัดทะเล', image: './assets/images/r2.jpg', quantity: 50 },
          { id: 18, color: 'ข้าวผัดต้มยำ', image: './assets/images/r3.jpg', quantity: 50 },
          { id: 19, color: 'ข้าวผัดกุ้ง', image: './assets/images/r4.jpg', quantity: 5 },
          { id: 20, color: 'ข้าวผัดหมูยอ', image: './assets/images/r5.jpg', quantity: 50 },
          { id: 21, color: 'ข้าวผัดมันกุ้ง', image: './assets/images/r6.jpg', quantity: 50 },
          { id: 22, color: 'ข้าวหมูกระเทียม', image: './assets/images/r7.jpg', quantity: 50 },
          { id: 23, color: 'กุ้งผัดกระเทียมราดข้าว', image: './assets/images/r8.jpg', quantity: 50 },
          { id: 24, color: 'ข้าวผัดพริกแกงหมู', image: './assets/images/r9.jpg', quantity: 50 },
          { id: 25, color: 'ผัดกะเพราเนื้อไข่ดาว', image: './assets/images/r10.jpg', quantity: 50 },
          { id: 26, color: 'ข้าวไข่เจียว', image: './assets/images/r11.jpg', quantity: 50 },
          { id: 27, color: 'ข้าวผัดญี่ปุ่น', image: './assets/images/r12.jpg', quantity: 50 },
          { id: 28, color: 'ข้าวผัดแหนม', image: './assets/images/r13.jpg', quantity: 50 },
          { id: 29, color: 'ข้าวผัดปูก้อน', image: './assets/images/r14.jpg', quantity: 50 },
          { id: 30, color: 'ข้าวผัดกะปิ', image: './assets/images/r15.jpg', quantity: 50 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].color)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].color)
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
          return this.variants[this.selectedVariant].color
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

        <p v-if="inStock">สั่งเลย!!</p>
        <p v-else>วัตถุดิบหมดจ้า</p>

        <p>เมนู : {{ shipping }}</p>
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
        product: 'noodle',
        brand: 'menu',
        selectedVariant: 0,
        variants: [
          { id: 31, color: 'ขนมจีนน้ำพริก', image: './assets/images/n1.jpg', quantity: 0 },
          { id: 32, color: 'ก๋วยเตี๋ยวไก่ตุ๋นมะระ', image: './assets/images/n2.jpg', quantity: 50 },
          { id: 33, color: 'ก๋วยเตี๋ยวเรือ', image: './assets/images/n3.jpg', quantity: 50 },
          { id: 34, color: 'ก๋วยเตี๋ยวเป็ด', image: './assets/images/n4.jpg', quantity: 5 },
          { id: 35, color: 'ผัดวุ้นเส้นเกาหลี', image: './assets/images/n5.jpg', quantity: 50 },
          { id: 36, color: 'ขนมจีนผัดขี้เมากุ้ง', image: './assets/images/n6.jpg', quantity: 50 },
          { id: 37, color: 'สปาเกตตีเพสโต้ซอส', image: './assets/images/n7.jpg', quantity: 50 },
          { id: 38, color: 'หมี่ยำกุ้งสด', image: './assets/images/n8.jpg', quantity: 50 },
          { id: 39, color: 'สปาเกตตีผัดต้มยำกุ้ง', image: './assets/images/n9.jpg', quantity: 50 },
          { id: 40, color: 'ผัดหมี่ซั่วทะเล', image: './assets/images/n10.jpg', quantity: 50 },
          { id: 41, color: 'ยำขนมจีน', image: './assets/images/n11.jpg', quantity: 50 },
          { id: 42, color: 'ผัดไทยกุ้งสดห่อไข่', image: './assets/images/n12.jpg', quantity: 50 },
          { id: 43, color: 'สปาเก็ตตี้ปลาหม฿กผัดไข่เค็ม', image: './assets/images/n13.jpg', quantity: 50 },
          { id: 44, color: 'เฝอเนื้อ', image: './assets/images/n14.jpg', quantity: 50 },
          { id: 45, color: 'ก๋วยจั๊บน้ำข้นหมูกรอบ', image: './assets/images/n15.jpg', quantity: 50 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].color)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].color)
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
          return this.variants[this.selectedVariant].color
        }
        return 2.99
      }
  }
}),///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.component('showcart', {

  cart2

})
