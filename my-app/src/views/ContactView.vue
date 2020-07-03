<template>
  <div>
    <h1>Contact Form</h1>
    <input v-model="user.name" />
    <Contact v-bind:user="user.name" />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "ContactView",
  components: {
    Contact
  },
  data() {
    return {
      user: {
        name: "Test"
      }
    };
  }
};
</script>