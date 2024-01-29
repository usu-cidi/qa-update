<template>

  <Button class="maintainer-button" text="Manage Maintainers" @goToLink="goToMaintainers" />
  <Button class="add-button" text="Add New Board" @goToLink="goToAddBoard" />

  <h1>QA Update</h1>
  <a href="https://github.com/emmalynnnn/cidi-monday-qa-automation" target="_blank">About</a>

  <h2>Active Automations - Updates Nightly at {{time}}</h2>
  <AutomationsList active />
  <h2>Inactive Automations</h2>
  <AutomationsList :active="false" />

</template>


<script>
import Button from "@/components/Button.vue";
import AutomationsList from "@/components/AutomationsList.vue";

export default {

  components: {
    AutomationsList,
    Button
  },

  data() {
    return {
      time: '8:00 PM',
    }
  },

  methods: {

    goToMaintainers() {
      this.$router.push({path: '/maintainers'});
    },

    goToAddBoard() {
      this.$router.push({path: '/add'})
    },

  }
}
</script>


<style>

h1 {
  text-align: center;
  font-size: 40pt;
}

.maintainer-button {
  position: fixed;
  top: 10px; /* Adjust the top distance as needed */
  left: 20px; /* Adjust the right distance as needed */
}

.add-button {
  position: fixed;
  top: 10px; /* Adjust the top distance as needed */
  right: 20px; /* Adjust the right distance as needed */
}


</style>
