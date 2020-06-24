Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `<div>
  <div class="product-image">
    <a :href="link" target="_blank">
      <img :src="image" alt="" />
    </a>
  </div>
  <div class="product-info">
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>
    <p>User is premium: {{ premium }}</p>
    <button v-on:click="toggleStock">Toggle Stock</button>
    <h1>{{ title }}</h1>

    <h2>{{ info }}</h2>
    <div>
      <p
        v-for="detail in details"
        class="detail-p"
        :style="{ fontSize: '32px' }"
        :key="detail"
      >
        {{ detail }}
      </p>
      </div>
    </div>
  </div>`,
  data() {
    return {
      product: "Socks",
      inStock: false,
      link: "http://google.com",
      image: "./assets/socks.png",
      description: "These clothy foot containers will make you feel splendid.",
      details: ["organic", "fresh", "stupid", "ugly"],
      variants: [
        {
          id: 1,
          brand: "Adidas",
          color: "blue",
        },
        {
          id: 2,
          brand: "Nike",
          color: "pink",
        },
      ],
    };
  },
  methods: {
    toggleStock: function () {
      this.inStock = !this.inStock;
    },
  },
  computed: {
    title() {
      return this.product + " " + this.description;
    },
    info() {
      return this.product + " " + this.details;
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    premium: false,
  },
});
