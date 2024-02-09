
<script setup>
  import Button from "@/components/Button.vue";
  import Toggle from "@/components/Toggle.vue";

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
      <p>Update Column ID: {{details.updateColId}}</p>

      <Toggle
          :activated="active"
          :item="details"
          v-on:activate="activateAutomation"
          v-on:deactivate="deactivateAutomation"
      />

      <p>Ally Semester ID: {{details.allySemId}}</p>
      <p>End Date: {{details.endDate}}</p>
      <p>Last Updated: {{details.lastUpdated}}</p>
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

      <Toggle :activated="active"
              :item="details"
              v-on:activate="activateAutomation"
              v-on:deactivate="deactivateAutomation"
      />

    </div>

  </div>

</template>


<script>
import {SERVER_URL} from "@/constants.js";

export default {

  props: ['details', 'active', 'postData'],

  data() {
    return {
      updateText: 'Trigger Update Now',
    }
  },

  methods: {

    activateAutomation(item) {
      console.log(`Activating ${item.name}`);
    },

    deactivateAutomation(item) {
      console.log(`Deactivating ${item.name}`);
    },

    editAutomation(info) {
      console.log("Editing an automation");
      this.$router.push({path: '/edit', query: {item: JSON.stringify(info)}});
    },

    async manuallyTrigger(info) {
      this.updateText = "Update initiated!"
      const result = await this.postData(`${SERVER_URL}update-now`, {id: info.mondayId});
      console.log(result);
    },

    postData(url, data, contentType="application/json") {
      return fetch(url, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        connection: "keep-alive",
        headers: {
          Accept: 'application.json',
          "Content-Type": contentType,
        },
        body: JSON.stringify(data)
      })
          .then(res => {
            return res.json();
          })
          .then((obj) => {
            return obj;
          })
          .catch(err => {
            console.log(err);
          });
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
