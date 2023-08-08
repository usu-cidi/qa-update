<template>
  <br>
  <p>Something not working right?</p>
  <a class="btn btn-dark button" :href="BUG_REPORT_URL" target="_blank">Fill out a bug report form</a>

</template>

<script>
import {BUG_REPORT_URL} from '@/assets/constants.js';
export default {
  data() {
    return {
      BUG_REPORT_URL: BUG_REPORT_URL,
    }
  }
}
</script>

