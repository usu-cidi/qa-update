
<script setup>

defineProps({
  activated: Boolean
})
</script>

<template>

  <div>
    <p class="switch-label">{{text}} &nbsp;</p>
    <label class="switch">
      <input type="checkbox" v-model="isChecked" @change="handleCheckboxChange">
      <span class="slider round"></span>
    </label>
  </div>

</template>


<script>
export default {

  props: ['activated'],

  data () {
    return {
      isChecked: false,
      text: '',
    }
  },

  methods: {
    handleCheckboxChange() {
      console.log('Checkbox state changed. New value:', this.isChecked);
    }
  },

  created() {
    this.isChecked = this.activated;
    if (this.isChecked) {
      this.text = "Disable?"
    } else {
      this.text = "Enable?"
    }
  }

}
</script>


<style>

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-bottom: 10px; /* Add margin to create space between switch and label */
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
  display: inline-block;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #3498db;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* Styles for the switch label */
.switch-label {
  margin: 0;
  display: inline-block;
}


</style>
