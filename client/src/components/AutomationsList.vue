
<script setup>
  import Automation from "@/components/Automation.vue";

  defineProps({
    automations: Array,
    active: Boolean
  });
</script>

<template>

  <div v-if="relevantAutomations.length === 0">
    <p class="none-found">No automations found.</p>
  </div>

  <div class="automation-list" v-for="item in relevantAutomations">
    <Automation :active="active"
                :details="item"/>
  </div>

</template>


<script>
export default {

  props: ['active', 'automations'],

  data() {
    return {
      relevantAutomations: [],
    }
  },

  methods: {

  },

  created() {
    this.relevantAutomations = this.automations.filter((item) => item.active === this.active);
  },

}
</script>


<style>

.automation-list {
  margin-bottom: 50px;
}

</style>
