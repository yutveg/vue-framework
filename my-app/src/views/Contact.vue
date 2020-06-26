<template>
  <div>
    <label>Name</label>
    <input v-model="input" value="name" />
    <label>Message</label>
    <input v-model="input" value="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      message: ""
    };
  }
};
</script>