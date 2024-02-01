<script setup>

defineProps({
  maintainers: Array,
});
</script>

<template>

  <ul v-for="item in maintainers">
    <li>{{formatMaintainer(item)}}</li>
  </ul>

</template>


<script>

export default {

  components: {

  },

  data() {
    return {

    }
  },

  methods: {
    formatMaintainer(item) {
      if (item.)
      return `${item.name}: ${item.email}`
    }
  }
}
</script>


<style>

ul {
  list-style-type: none; /* Remove default list-style */
  text-align: center;
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
}

li {
  padding: 8px 0; /* Add padding to each list item for spacing */
  border-bottom: 1px solid #ddd; /* Add a border between list items */
}

/* Style the last list item to remove the bottom border */
li:last-child {
  border-bottom: none;
}

</style>
