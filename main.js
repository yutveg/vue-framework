var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    inStock: false,
    link: "http://google.com",
    image: "./assets/socks.png",
    description: "These clothy foot containers will make you feel splendid.",
    details: ["organic", "fresh", "stupid", "ugly"],
    variants: [
      {
        id: 1,
        color: "blue",
      },
      {
        id: 2,
        color: "pink",
      },
    ],
  },
  methods: {
    toggleStock: function () {
      this.inStock = !this.inStock;
    },
  },
});
