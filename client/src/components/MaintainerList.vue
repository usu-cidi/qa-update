<script setup>

defineProps({
  maintainers: Array,
  primaryMaintainer: Number,
});
</script>

<template>

  <ul v-for="item in maintainers" class="maintainer">
    <div style="display: flex; justify-content: space-around;">
      <li>
        <span class="list-text">{{formatMaintainer(item)}}&nbsp;&nbsp;&nbsp;</span>
        <span class="remove" @click="() => editMaintainer(item)">Remove?</span>
      </li>
    </div>
  </ul>

</template>


<script>
import Button from "./Button.vue";

export default {

  emits: ['remove'],

  components: {
    Button,
  },

  data() {
    return {
      theMaintainers: [],
    }
  },

  created() {
  },

  methods: {
    formatMaintainer(item) {
      let text = `${item.name}: ${item.email}`;
      if (item.id === this.primaryMaintainer) {
        text += ' (primary maintainer)';
      }
      return text;
    },

    editMaintainer(item) {
      if (confirm(`Are you sure you want to remove ${item.name} as a maintainer?`)) {
        console.log(`Removing ${item.name}`);
        this.$emit("remove", item);
      }
    },


  }
}
</script>


<style>



.maintainer {
  position: relative;
}

ul {
  list-style-type: none; /* Remove default list-style */
  padding: 0; /* Remove default padding */
}

li {
  padding: 8px 0; /* Add padding to each list item for spacing */
  border-bottom: 1px solid #ddd; /* Add a border between list items */
  display: inline-block;
}

.list-text {
  flex: 1; /* Make the text take up available space */
  margin-right: 0; /* Remove margin between text and button */
}

/* Style the last list item to remove the bottom border */
li:last-child {
  border-bottom: none;
}

.remove {
  text-decoration: underline;
  color: brown;
}

</style>
