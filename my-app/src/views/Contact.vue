<template>
  <div>
    <label>Name</label>
    <input v-model="form.name" type="text" name="name" />
    <label>Message</label>
    <input v-model="form.message" type="text" name="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        message: ""
      }
    };
  }
};
</script>