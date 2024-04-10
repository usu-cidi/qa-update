
<script setup>
  import Automation from "./Automation.vue";

  defineProps({
    automations: Array,
    active: Boolean,
  });
</script>

<template>

  <div v-if="relevantAutomations.length === 0">
    <p class="none-found">No automations found.</p>
  </div>

  <div class="automation-list" v-for="item in relevantAutomations">
    <Automation :active="active"
                :details="item"
                v-on:refresh="refresh"
    />
  </div>

</template>


<script>
export default {

  props: ['active', 'automations'],
  emits: ['refresh'],

  data() {
    return {
      relevantAutomations: [],
    }
  },

  methods: {
    refresh() {
      this.$emit("refresh");
    },

    sortBoards() {
      this.relevantAutomations = this.automations.filter((item) => item.active === this.active);
    }

  },

  watch: {
    automations(newVal){
      this.sortBoards();
    }
  },

  created() {
    this.sortBoards();
  },

}
</script>


<style>

.automation-list {
  margin-bottom: 50px;
}

</style>
