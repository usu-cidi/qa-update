<template>
  <MainHeader/>


  <div class="feature-box blue">
    <br>
    <h2>Error 404: Not Found</h2>
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
import MainHeader from "./MainHeader.vue";
export default {
  name: 'NotFound',
  components: {
    MainHeader,
  },
}
</script>