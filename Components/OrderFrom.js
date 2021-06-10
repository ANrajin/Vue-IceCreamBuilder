app.component("order-form", {
  props: {
    cart: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  template: `
  <div id="modal">
        <div class="backdrop" @click="hideModalForm"></div>
        <div class="modalBody">
        <div class="greet" v-if="showGreet">
            <h2>Congratulations!</h2>
            <img src="../images/confetti.gif"/>
            <p>Your Order is placed.</p>
        </div>
        <div class="formContainer" id="orderForm" v-else>
            <h1>Complete the form below and hit submit</h1>
            <form class="orderForm" @submit.prevent="onSubmit">
            <ul>
                <li>
                <input
                    type="text"
                    v-model="name"
                    class="fieldStyle fieldSplit alignLeft"
                    placeholder="Name"
                />
                <input
                    type="text"
                    v-model="phone"
                    class="fieldStyle fieldSplit alignRight"
                    placeholder="Phone no."
                />
                </li>
                <li>
                <input
                    type="hidden"
                    class="fieldStyle fieldSplit alignRight"
                />
                </li>
                <li>
                <textarea
                    class="fieldStyle"
                    v-model="address"
                    placeholder="Address"
                ></textarea>
                </li>
                <li>
                <input type="submit" value="Submit"/>
                </li>
            </ul>
            </form>
        </div>
        </div>
    </div>`,
  data() {
    return {
      name: "",
      phone: "",
      address: "",

      showGreet: false,
    };
  },
  methods: {
    hideModalForm() {
      this.$emit("hide-modal");
    },
    onSubmit() {
      orderDetails = {
        name: this.name,
        phone: this.phone,
        address: this.address,
        total: this.total,
      };
      if (orderDetails.total > 0) {
        this.showGreet = !this.showGreet;
        this.$emit("clear-cart");
      }
    },
  },
});
