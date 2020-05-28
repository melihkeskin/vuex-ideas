<template>
  <div>
    <form @submit.prevent="create">
      <label for="idea-title">Ideas's Title</label><br />
      <input type="text" id="idea-title" v-model="title" />
      <button type="submit">create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    create() {
      const idea = {
        createAt: new Date(),
        title: this.title,
      };
      this.$store.dispatch("createIdea", idea);
      //this.$store.commit('CREATE_IDEAS', idea);
      this.title = "";
    },
  },
};
</script>

<style></style>
