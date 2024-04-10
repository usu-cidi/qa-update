<template>
  <h1>Issues</h1>
  <Button class="issue-button" text="Home" @goToLink="leave" />

  <div v-for="issue in issues">
    <Issue :details="issue" />
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Issue from "../components/Issue.vue";
import { SERVER_URL } from "../constants.js";

export default {
  components: {
    Button,
    Issue,
  },

  data() {
    return {
      issues: [],
    };
  },

  async created() {
    const resp = await fetch(`${SERVER_URL}get-issues`);
    const body = await resp.json();
    console.log(body);

    this.issues = body;
  },

  methods: {
    leave() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
.issue-button {
  position: fixed;
  top: 10px; /* Adjust the top distance as needed */
  left: 20px; /* Adjust the right distance as needed */
}
</style>
