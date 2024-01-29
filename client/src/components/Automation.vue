
<script setup>
  import Button from "@/components/Button.vue";
  import Toggle from "@/components/Toggle.vue";

  defineProps({
    details: Object,
    active: Boolean
  });

</script>

<template>

  <div v-if="active" class="automation">
    <h3>Spring 2024</h3>

    <Button class="edit-button" text="edit" @go-to-link="editAutomation"/>

    <div class="p-container">
      <p>Monday ID: {{details.mondayId}}</p>
      <p>Update Column ID: {{details.updateColId}}</p>

      <Toggle :activated="active"/>

      <p>Ally Semester ID: {{details.allySemId}}</p>
      <p>End Date: {{details.endDate}}</p>
      <p>Last Updated: {{details.lastUpdated}}</p>
    </div>

  </div>

  <div v-else class="automation">
    <h3>Fall 2023</h3>

    <Button class="edit-button" text="edit" @go-to-link="editAutomation"/>

    <div class="p-container">
      <p>Monday ID: {{details.mondayId}}</p>
      <p>Last Update: {{details.lastUpdated}}</p>

      <Toggle :activated="active"/>

    </div>

  </div>

</template>


<script>
export default {

  methods: {
    editAutomation() {
      console.log("Editing an automation");
    }
  },

}
</script>


<style>

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
