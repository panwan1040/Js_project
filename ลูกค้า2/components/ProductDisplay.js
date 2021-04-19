app.component('bubletea', {
  props: {
    stocker: {
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
      p:40,
        product: 'tea',
        brand: 'menu',
        selectedVariant: 0,
        variants: [
          { id: 11, name: 'ชาแดงบ๊วย', image: './assets/images/t1.jpg', quantity: 50,price:40 },
          { id: 12, name: 'ชาแดงพีช', image: './assets/images/t2.jpg', quantity: 50,price:40 },
          { id: 13, name: 'ชาแดงองุ่น', image: './assets/images/t3.jpg', quantity: 50,price:40 },
          { id: 14, name: 'ชาเขียวลิ้นจี่', image: './assets/images/t4.jpg', quantity: 50,price:40 },
          { id: 15, name: 'ชาเขียวแอปเปิ้ล', image: './assets/images/t5.jpg', quantity: 50,price:40 },
          { id: 16, name: 'ชาเขียวกีวี', image: './assets/images/t6.jpg', quantity: 50,price:40 },
          { id: 17, name: 'ชาเขียวโยเกิร์ต', image: './assets/images/t7.jpg', quantity: 50,price:40 },
          { id: 18, name: 'ชานมกาแฟ', image: './assets/images/t8.jpg', quantity: 50,price:40 },
          { id: 19, name: 'ชานมเผือก', image: './assets/images/t9.jpg', quantity: 50,price:40 },
          { id: 110, name: 'ชานมแคนตาลูป', image: './assets/images/t10.jpg', quantity: 50,price:40 },
          { id: 111, name: 'ชาเขียวนม', image: './assets/images/t11.jpg', quantity: 50,price:40 },
          { id: 112, name: 'ชาแดง', image: './assets/images/t12.jpg', quantity: 50,price:40 },
          { id: 113, name: 'ชาเขียวเสาวรส', image: './assets/images/t13.jpg', quantity: 50,price:40 },
          { id: 114, name: 'ชาเขียวสับปะรด', image: './assets/images/t14.jpg', quantity: 50,price:40 },
          { id: 115, name: 'ชาเขียวบลูเบอร์รี่', image: './assets/images/t15.jpg', quantity: 50,price:40 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].name)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].name)
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
      pr() {
        return this.variants[this.selectedVariant].price
    },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.stocker) {
          return this.variants[this.selectedVariant].name
        }
        
      }
  }
}),/////////////////////////////////////////////////////////////////////////////////////////////////
app.component('rice', {
  props: {
    stocker: {
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
          { id: 21,  name: 'ข้าวผัดปู', image: './assets/images/r1.jpg', quantity: 50,price:40 },
          { id: 22,  name: 'ข้าวผัดทะเล', image: './assets/images/r2.jpg', quantity: 50,price:40 },
          { id: 23,  name: 'ข้าวผัดต้มยำ', image: './assets/images/r3.jpg', quantity: 50,price:40 },
          { id: 24,  name: 'ข้าวผัดกุ้ง', image: './assets/images/r4.jpg', quantity: 5,price:40 },
          { id: 25,  name: 'ข้าวผัดหมูยอ', image: './assets/images/r5.jpg', quantity: 50,price:40 },
          { id: 26,  name: 'ข้าวผัดมันกุ้ง', image: './assets/images/r6.jpg', quantity: 50,price:40 },
          { id: 27,  name: 'ข้าวหมูกระเทียม', image: './assets/images/r7.jpg', quantity: 50,price:40 },
          { id: 28,  name: 'กุ้งผัดกระเทียมราดข้าว', image: './assets/images/r8.jpg', quantity: 50,price:40 },
          { id: 29,  name: 'ข้าวผัดพริกแกงหมู', image: './assets/images/r9.jpg', quantity: 50,price:40 },
          { id: 210, name: 'ผัดกะเพราเนื้อไข่ดาว', image: './assets/images/r10.jpg', quantity: 50 ,price:40},
          { id: 211, name: 'ข้าวไข่เจียว', image: './assets/images/r11.jpg', quantity: 50,price:40 },
          { id: 212, name: 'ข้าวผัดญี่ปุ่น', image: './assets/images/r12.jpg', quantity: 50,price:40 },
          { id: 213, name: 'ข้าวผัดแหนม', image: './assets/images/r13.jpg', quantity: 50,price:40 },
          { id: 214, name: 'ข้าวผัดปูก้อน', image: './assets/images/r14.jpg', quantity: 50,price:40 },
          { id: 215, name: 'ข้าวผัดกะปิ', image: './assets/images/r15.jpg', quantity: 50,price:40 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].name)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].name)
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
      pr() {
        return this.variants[this.selectedVariant].price
    },
      shipping() {
        if (this.stocker) {
          return this.variants[this.selectedVariant].name
        }
       
      }
  }
}),//////////////////////////////////////////////////////////////////////////////////////////
app.component('noodle', {
  props: {
    stocker: {
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
          { id: 31,  name: 'ขนมจีนน้ำพริก', image: './assets/images/n1.jpg', quantity: 0,price:40 },
          { id: 32,  name: 'ก๋วยเตี๋ยวไก่ตุ๋นมะระ', image: './assets/images/n2.jpg', quantity: 50,price:40 },
          { id: 33,  name: 'ก๋วยเตี๋ยวเรือ', image: './assets/images/n3.jpg', quantity: 50,price:40 },
          { id: 34,  name: 'ก๋วยเตี๋ยวเป็ด', image: './assets/images/n4.jpg', quantity: 5,price:40 },
          { id: 35,  name: 'ผัดวุ้นเส้นเกาหลี', image: './assets/images/n5.jpg', quantity: 50,price:40 },
          { id: 36,  name: 'ขนมจีนผัดขี้เมากุ้ง', image: './assets/images/n6.jpg', quantity: 50,price:40 },
          { id: 37,  name: 'สปาเกตตีเพสโต้ซอส', image: './assets/images/n7.jpg', quantity: 50,price:40 },
          { id: 38,  name: 'หมี่ยำกุ้งสด', image: './assets/images/n8.jpg', quantity: 50,price:40 },
          { id: 39,  name: 'สปาเกตตีผัดต้มยำกุ้ง', image: './assets/images/n9.jpg', quantity: 50,price:40 },
          { id: 310, name: 'ผัดหมี่ซั่วทะเล', image: './assets/images/n10.jpg', quantity: 50,price:40 },
          { id: 311, name: 'ยำขนมจีน', image: './assets/images/n11.jpg', quantity: 50,price:40 },
          { id: 312, name: 'ผัดไทยกุ้งสดห่อไข่', image: './assets/images/n12.jpg', quantity: 50,price:40 },
          { id: 313, name: 'สปาเก็ตตี้ปลาหม฿กผัดไข่เค็ม', image: './assets/images/n13.jpg', quantity: 50,price:40 },
          { id: 314, name: 'เฝอเนื้อ', image: './assets/images/n14.jpg', quantity: 50,price:40 },
          { id: 315, name: 'ก๋วยจั๊บน้ำข้นหมูกรอบ', image: './assets/images/n15.jpg', quantity: 50,price:40 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].name)
         // this.$emit('add-to-cart', this.variants[this.selectedVariant].price)
      },
      // solution
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].name)
       // this.$emit('remove-from-cart', this.variants[this.selectedVariant].price)
      },

      addToPriceCart() {
        this.$emit('add-to-price', this.variants[this.selectedVariant].price)
    },
    // solution
    removePriceFromCart() {
      this.$emit('remove-from-price', this.variants[this.selectedVariant].price)
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
      pr() {
        return this.variants[this.selectedVariant].price
    },
      shipping() {
        if (this.stocker) {
          return this.variants[this.selectedVariant].name
        }
       
      }
  }
}),///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.component('showcart', {

  cart

})
