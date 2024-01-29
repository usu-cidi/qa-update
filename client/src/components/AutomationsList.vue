
<script setup>
  import Automation from "@/components/Automation.vue";

  defineProps({
    active: Boolean
  })
</script>

<template>

  <p v-if="active">Here are the active automations</p>
  <p v-else>Here are the inactive automations</p>

  <Automation :active="active"/>

</template>


<script>
export default {

  methods: {

  },

}
</script>


<style>

</style>
