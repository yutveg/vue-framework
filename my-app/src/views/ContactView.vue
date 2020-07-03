<template>
  <div>
    <h1>Contact Form</h1>
    <input v-model="username" />
    <Contact v-bind:user="user.name" />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "ContactView",
  props: {
    username: String
  },
  components: {
    Contact
  },
  data() {
    return {
      user: {
        name: ""
      }
    };
  }
};
</script>