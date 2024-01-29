
<script setup>
  defineProps({
    text: String
  })
</script>

<template>

  <button class="button" @click="$emit('goToLink')">{{text}}</button>

</template>

<script>

export default {

  emits: ['goToLink'],

  data() {
    return {
    }
  },
}

</script>

<style>
.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #3498db;
  border-radius: 5px;
  color: #3498db;
  background-color: #fff;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.button:hover {
  background-color: #3498db;
  color: #fff;
}

.button:active {
  border-color: #2980b9;
  background-color: #2980b9;
  color: #fff;
}

</style>
