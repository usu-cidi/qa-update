
<script setup>

defineProps({
  details: Object,
});

</script>

<template>

  <div v-if="!details.message.rowIssue" :class="getColor(details.type)">
    <h3>{{formatType(details.type)}} - {{new Date(details.dateTime).toLocaleDateString()}} {{new Date(details.dateTime).toLocaleTimeString()}}</h3>
    <p>Monday Board ID: {{details.boardId}}</p>
    <p>Details: {{details.message}}</p>
  </div>

  <div v-else :class="getColor(details.type)">
    <h3>{{formatType(details.type)}} - {{new Date(details.dateTime).toLocaleDateString()}} {{new Date(details.dateTime).toLocaleTimeString()}}</h3>
    <p>Monday Board ID: {{details.boardId}}</p>
    <p>Details:</p>
    <p v-if="details.message.failedToAdd">{{details.message.failedToAdd.slice(0, -2)}}</p>
    <p v-if="details.message.failedToUpdate">{{details.message.failedToUpdate.slice(0, -2)}}</p>

    <div v-if="details.message.failedToAddDetails.length > 0" class="collapse-box">
      <button @click="toggleCollapsible1" class="collapsible-button">Failed to Add - {{getWord(isCollapsibleOpen1)}} Full Details {{getDirection(isCollapsibleOpen1)}}</button>
      <div v-if="isCollapsibleOpen1" class="collapsible-content">
        <p>{{details.message.failedToAddDetails}}</p>
      </div>
    </div>

    <div v-if="details.message.failedToUpdateDetails.length > 0" class="collapse-box">
      <button @click="toggleCollapsible2" class="collapsible-button">Failed to Update - {{getWord(isCollapsibleOpen2)}} Full Details {{getDirection(isCollapsibleOpen2)}}</button>
      <div v-if="isCollapsibleOpen2" class="collapsible-content">
        <p>{{details.message.failedToUpdateDetails}}</p>
      </div>
    </div>

  </div>

</template>


<script>

export default {

  props: ['details'],

  data() {
    return {
      isCollapsibleOpen1: false,
      isCollapsibleOpen2: false,
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
    },
    getDirection(open) {
      if (open) {
        return '🔼';
      } else {
        return '🔽';
      }
    },
    getWord(open) {
      if (open) {
        return 'Hide';
      } else {
        return 'View';
      }
    },
    toggleCollapsible1() {
      this.isCollapsibleOpen1 = !this.isCollapsibleOpen1;
    },
    toggleCollapsible2() {
      this.isCollapsibleOpen2 = !this.isCollapsibleOpen2;
    },
  },

}
</script>


<style>

.collapse-box {
}

.collapsible-button {
  width: 100%;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: #a19672 solid;
  background: #f2ebd3;
}

.collapsible-content p {
  padding: 10px;
  margin-top: 10px;
  display: block;
  font-size: 10pt;
}

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
