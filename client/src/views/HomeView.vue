<template>
  <div class="two-buttons">
    <Button text="Manage Maintainers" @goToLink="goToMaintainers" />
    <p></p>
    <Button text="View Errors / Issues" @goToLink="goToIssues" />
  </div>

  <Button class="add-button" text="Add New Board" @goToLink="goToAddBoard" />

  <h1>QA Update</h1>

  <div class="center-link">
    <a
      href="https://github.com/emmalynnnn/cidi-monday-qa-automation"
      target="_blank"
      class="link"
      >About</a
    >
  </div>

  <div v-if="!automations || automations.length === 0">
    <p>Loading...</p>
  </div>

  <div v-else>
    <h2>Active Automations - Updates Nightly at {{ time }}</h2>
    <AutomationsList
      :active="true"
      :automations="automations"
      v-on:refresh="refreshBoards"
    />
    <h2>Inactive Automations</h2>
    <AutomationsList
      :active="false"
      :automations="automations"
      v-on:refresh="refreshBoards"
    />
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import AutomationsList from "../components/AutomationsList.vue";
import { SERVER_URL } from "../constants.js";

export default {
  components: {
    AutomationsList,
    Button,
  },

  data() {
    return {
      time: "8:00 PM",
      automations: [],
    };
  },

  methods: {
    goToMaintainers() {
      this.$router.push({ path: "/maintainers" });
    },

    goToAddBoard() {
      this.$router.push({ path: "/add" });
    },

    goToIssues() {
      this.$router.push({ path: "/issues" });
    },

    async refreshBoards(newAutomations = null) {
      if (newAutomations) {
        this.automations = newAutomations;
      } else {
        const resp = await fetch(`${SERVER_URL}get-boards`);
        this.automations = await resp.json();
      }
    },
  },

  async created() {
    this.refreshBoards();
  },
};
</script>

<style>
h1 {
  text-align: center;
  font-size: 40pt;
}

h2 {
  text-align: center;
}

.two-buttons {
  position: fixed;
  top: 10px; /* Adjust the top distance as needed */
  left: 20px; /* Adjust the right distance as needed */
}

.add-button {
  position: fixed;
  top: 10px; /* Adjust the top distance as needed */
  right: 20px; /* Adjust the right distance as needed */
}

/* Styles to center a link */
.center-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

/* Additional styling for the link (optional) */
.center-link a {
  font-size: 20px;
  color: #3498db;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.center-link a:hover {
  color: #0367a8;
}
</style>
