app.component("test2", {
  template:
    /*html*/
    `<p> testttttt:::</p>
             <form action="/" method="post">
                <input type="hidden" name="order" value="cart" />
                <button
                type="submit"
                name="addToDB"
                value="addToDB"
                class="btn btn-success"
                >
                Success
                </button>
            </form>`,
});

// app.component("btnSend", {
//   props: {},
//   template:
//     /*html*/
//     `<div class="product-display">
//     <div class="product-container">
//       <div class="product-image">
//         <img v-bind:src="image">
//       </div>
//       <div class="product-info">
//         <h1>{{ title }}</h1>

//         <p v-if="inStock">{{ shipping }}</p>
//         <p v-else>วัตถุดิบหมดจ้า</p>

//         <p>เมนู : {{ shipping }}</p>
//         <p>ราคา : {{ pr }}</p>

//       <table>
//       <tr>
//       <td v-for="(variant, index) in variants">
//         <div

//           :key="variant.id"
//           @mouseover="updateVariant(index)"
//           class="color-circle"
//           :style="{ backgroundImage: 'url(' + variant.image + ')' } ">
//         </div>
//         </td>
//         </tr>
//         </table>

//         <button
//           class="button"
//           :class="{ disabledButton: !inStock }"
//           :disabled="!inStock"
//           v-on:click="addToCart"
//           v-on:click="addToPriced">
//           Add to Cart
//         </button>

//         <!-- solution -->
//         <button
//         class="button"
//         :class="{ disabledButton: !inStock }"
//         :disabled="!inStock"
//         @click="removeFromCart"
//         @click="removeFromPriced"
//         >
//         Remove Item
//       </button>
//       <!-- solution -->

//       </div>
//     </div>
//   </div>``
//       <form action="/" method="post">
//       <input type="hidden" name="order" value="{{ cart }}" />
//        <button
//        type="submit"
//        name="addToDB"
//        value="addToDB"
//        class="btn btn-success"
//       >
//        Success
//       </button>
//       </form>
//       `,
// });
