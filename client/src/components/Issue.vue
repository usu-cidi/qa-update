
<script setup>
import Button from "@/components/Button.vue";

defineProps({
  details: Object,
});

</script>

<template>

  <div :class="getColor(details.type)">
    <h3>{{formatType(details.type)}} - {{details.dateTime}}</h3>
    <p>Monday Board ID: {{details.boardId}}</p>
    <p>Details: {{details.message}}</p>

  </div>

</template>


<script>

export default {

  props: ['details'],

  data() {
    return {
    }
  },

  methods: {
    getColor(type) {
      if (type === 'critical error') {
        return 'issue red';
      } else {
        return 'issue yellow';
      }
    },
    formatType(type) {
      if (type === 'critical error') {
        return 'Critical Error';
      } else {
        return 'Non-Critical Issue(s)';
      }
    }
  },

}
</script>


<style>

.issue {
  color: black; /* Text color */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding for content inside the element */
  margin: 10px; /* Margin to create an offset background effect */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
  position: relative;
}

.red {
  background-color: #fcbbbb;
  border: 2px solid #D04848;
}

.yellow {
  background-color: #fff1c2;
  border: 2px solid #FFD23F;
}

h3 {
  font-size: 20pt;
  font-weight: bold;
  margin-bottom: 10px;
}


</style>
