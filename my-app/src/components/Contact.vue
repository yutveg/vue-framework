<template>
  <div>
    <form @submit="createCard">
      <label>Name</label>
      <input v-model="form.name" type="text" name="name" />
      <label>Message</label>
      <input v-model="form.message" type="text" name="message" />
      <button type="submit">Submit</button>
    </form>

    <div v-for="card in cards" :key="card.name">
      <h1>{{ card.name }}</h1>
      <h2>{{ card.message }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        message: ""
      },
      cards: []
    };
  },
  methods: {
    createCard(e) {
      e.preventDefault();
      let card = {
        name: this.form.name,
        message: this.form.message
      };
      this.cards.push(card);
      this.form.name = "";
      this.form.message = "";
    }
  }
};
</script>