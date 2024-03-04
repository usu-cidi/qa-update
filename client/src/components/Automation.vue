
<script setup>
  import Button from "@/components/Button.vue";

  defineProps({
    details: Object,
    active: Boolean,
  });

</script>

<template>

  <div v-if="active" class="automation">
    <h3>{{details.name}}</h3>

    <Button class="edit-button" text="Edit" @go-to-link="() => editAutomation(details)"/>

    <div class="p-container">
      <p>Monday ID: {{details.mondayId}}</p>
      <p>Last Updated Column ID: {{details.updateColId}}</p>

      <Button class="toggle-button" text="Deactivate" @go-to-link="() => deactivateAutomation(details)"/>

      <p>Ally Semester ID: {{details.allySemId}}</p>
      <p>End Date: {{details.endDate}}</p>
      <p>Last Updated: {{new Date(details.lastUpdated).toLocaleDateString()}} {{new Date(details.lastUpdated).toLocaleTimeString()}}</p>
    </div>

    <div class="trigger-now-button-box">
      <Button v-if="updateText === 'Trigger Update Now'" :text="updateText" @go-to-link="() => manuallyTrigger(details)"/>
      <p v-else>{{updateText}}</p>
    </div>

  </div>

  <div v-else class="automation">
    <h3>{{details.name}}</h3>

    <Button class="edit-button" text="Edit" @go-to-link="() => editAutomation(details)"/>

    <div class="p-container">
      <p>Monday ID: {{details.mondayId}}</p>
      <p>Last Update: {{details.lastUpdated}}</p>

      <Button class="toggle-button" text="Activate" @go-to-link="() => activateAutomation(details)"/>

    </div>

  </div>

</template>


<script>
import {SERVER_URL, postData} from "@/constants.js";

export default {

  props: ['details', 'active'],
  emits: ['refresh'],

  data() {
    return {
      updateText: 'Trigger Update Now',
    }
  },

  methods: {

    async activateAutomation(item) {
      console.log(`Activating ${item.name}`);
      const result = await postData(`${SERVER_URL}activate-board`, {id: item.mondayId});
      console.log(result);
      this.$emit("refresh");
    },

    async deactivateAutomation(item) {
      console.log(`Deactivating ${item.name}`);
      const result = await postData(`${SERVER_URL}deactivate-board`, {id: item.mondayId});
      console.log(result);
      this.$emit("refresh");
    },

    editAutomation(info) {
      console.log("Editing an automation");
      this.$router.push({path: '/edit', query: {item: JSON.stringify(info)}});
    },

    async manuallyTrigger(info) {
      const result = await postData(`${SERVER_URL}update-now`, {id: info.mondayId});
      console.log(result);
      this.updateText = "Update initiated!"
    },
  },

}
</script>


<style>

.trigger-now-button-box {
  text-align: center;
  padding: 10px;
}

.automation {
  background-color: #EEF5FF; /* Background color */
  color: black; /* Text color */
  border: 2px solid #3498db; /* Border color and thickness */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding for content inside the element */
  margin: 10px; /* Margin to create an offset background effect */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
  position: relative;
}

.edit-button {
  position: absolute;
  top: 15px; /* Adjust the top distance as needed */
  right: 15px; /* Adjust the right distance as needed */
}

.toggle-button {
  width: 150px;
  height: 45px;
}

.p-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  gap: 0; /* Adjust the gap between paragraphs as needed */
}

/* Style for each paragraph */
.p-container p {
  border-radius: 5px;
  font-size: 14pt;
}

h3 {
  font-size: 30pt;
  font-weight: bold;
  margin-bottom: 10px;
}


</style>
