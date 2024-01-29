
<script setup>
import Button from "@/components/Button.vue";

defineProps({
  //details: Object,
  active: Boolean
})
</script>

<template>

  <div v-if="active">
    <h3>Spring 2024</h3>
    <p>Monday ID: 1234</p>
    <p>Ally Semester ID: 1234</p>
    <p>Update Column ID: 1234</p>
    <p>End Date: 1234</p>
    <p>Last Updated: 1234</p>
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
    <p>disable</p>
    <Button text="edit" @go-to-link="editAutomation"/>
  </div>

  <div v-else>
    <h3>Fall 2023</h3>
    <p>Monday ID: 1234</p>
    <p>Last Updated: 1234</p>
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
    <p>disable</p>
    <Button text="edit" @go-to-link="editAutomation"/>
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

</style>
