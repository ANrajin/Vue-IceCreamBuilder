const app = Vue.createApp({
  data() {
    return {
      variants: [
        { id: 1, name: "Vanilla", price: 100 },
        { id: 2, name: "Chocolate", price: 120 },
        { id: 3, name: "Strawberry", price: 90 },
        { id: 4, name: "Orange", price: 70 },
        { id: 5, name: "Lemon", price: 30 },
      ],
      cart: [],
      showModal: false,
    };
  },
  methods: {
    addToCart(variantid) {
      this.cart.push(this.variants.find((variant) => variant.id == variantid));
    },
    removeFromCart(variantid) {
      let item = this.cart.findIndex((variant) => variant.id == variantid);
      this.cart.splice(item, 1);
    },
    toggleModal() {
      if (this.total == 0 && !this.showModal) {
        alert("Your Cart is empty!");
      } else {
        this.showModal = !this.showModal;
      }
    },
    resetCart() {
      this.cart = [];
    },
  },
  computed: {
    total() {
      return this.cart.reduce((total, variant) => total + variant.price, 0);
    },
  },
});
