
<script setup>
  import Automation from "@/components/Automation.vue";

  defineProps({
    active: Boolean
  });
</script>

<template>

  <div class="automation-list">
    <Automation :active="active"
                :details="{
      mondayId: '54321',
      updateColId: '54321',
      allySemId: '123',
      endDate: '05/01/2024',
      lastUpdated: '01/28/2024',
    }"/>
  </div>

</template>


<script>
export default {

  methods: {

  },

}
</script>


<style>

.automation-list {
  margin-bottom: 50px;
}

</style>
