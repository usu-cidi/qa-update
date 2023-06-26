<template>
  <MainHeader/>

  <div class="auth-wrapper">
    <div class="auth-content">
      <div class="auth-bg">
      </div>
      <div v-if="url" class="card">
        <div class="card-body text-center">
          <div class="mb-4">
            <svg width='300' viewBox='0 0 300 29'>
              <path fill='#fff'
                    d='M70.87,7.4a8.82,8.82,0,0,0-7.79,4.69A8.83,8.83,0,0,0,50,9.16V1.73a1.76,1.76,0,0,0-3.52,0V16.36a8.82,8.82,0,0,0,16.61,4A8.82,8.82,0,1,0,70.87,7.4ZM55.29,21.51a5.29,5.29,0,1,1,5.29-5.29A5.3,5.3,0,0,1,55.29,21.51Zm15.58,0a5.29,5.29,0,1,1,5.29-5.29A5.29,5.29,0,0,1,70.87,21.51ZM93,22.09a1.67,1.67,0,0,1-.4,2.44,2,2,0,0,1-2.67-.32l-4.12-5.06L81.64,24.2a2,2,0,0,1-2.66.32,1.67,1.67,0,0,1-.4-2.44l4.79-5.88-4.79-5.89A1.67,1.67,0,0,1,79,7.87a2,2,0,0,1,2.66.32l4.12,5.06L89.9,8.19a2,2,0,0,1,2.66-.32A1.67,1.67,0,0,1,93,10.31l-4.8,5.89Z' />
              <path fill='#fff'
                    d='M0.46,10.27L16.08,1.33V10L8,14.58ZM0,11V19.7l7.6,4.43V15.36ZM33.79,5.5L26.64,1.33V9.58Zm0.45,0.77-7.82,4.47h0l-8.26,4.72v8.71h0l16.08-9.25V6.28Z' />
            </svg>
          </div>

          <a class="btn btn-primary" data-toggle="tooltip"
             :href="url" >Authorize this app on Box.com</a>
          <br/>

          <br />
          <p>(You must have a USU Box account to use this application.)</p>
        </div>
      </div>

      <p v-else>Loading, please wait...</p>

    </div>
  </div>

  <br>
  <p>Something not working right?</p>
  <a class="btn btn-dark button" href="/bug-report">Fill out a bug report form</a>
</template>

<script>
/* eslint-disable */
import MainHeader from "./MainHeader.vue";
import {SERVER_URL} from '@/assets/constants.js';

export default {
  name: 'BoxLoginComponent',
  components: {
    MainHeader,
  },
  created() {
    fetch(SERVER_URL + "get-box-url", {credentials: "include"})
        .then(r => r.json())
        .then(response => {
          response = response.body
          console.log(response)
          this.url = response.authUrl;
        })
        .catch(err => {
          console.log(err);
          if (err === "TypeError: Cannot read properties of undefined (reading 'authUrl')") {
            console.log("Authentication error");
          }
        })
  },
  data() {
    return {
      url: "",
    }
  }
}
</script>