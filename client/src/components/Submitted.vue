<template>
  <BugHeader/>

  <div class="feature-box orange">
    <br>
    <h2>Thank you for submitting a bug report!</h2>
    <p>I will get back to you promptly with an update if you included your contact information.</p>
    <br>

    <!-----------------------
    Title: HTML – How to Show Text Above Image on Hover
    Author: Singh, Yogesh
    12.5.2022 (accessed 1.25.2023)
    Available at: https://makitweb.com/html-how-to-show-text-above-image-on-hover/
    Modified by Emma Lynn
    -->

    <div class="content_img">
      <img src="../assets/bug.gif" alt="Animation of a bug." class="url-ex"/>
      <div>Yim, K. (2017). <em>This Walk Cycle Wednesday, it’s a pillbug!</em> https://ketrinadrawsalot.tumblr.com/post/145292711592/this-walk-cycle-wednesday-its-a-pillbug</div>
    </div>

    <!----------------------->
    <br>

  </div>

  <br>
  <p>Something not working right?</p>
  <a class="btn btn-dark button" href="/bug-report">Fill out a bug report form</a>
</template>

<script>
/* eslint-disable */
import BugHeader from "./BugHeader.vue";
export default {
  name: 'SubmittedComponent',
  components: {
    BugHeader,
  },
}
</script>


<style>
.orange {
  border-color: #fa8520;
  background: #EA906C;
}
</style>