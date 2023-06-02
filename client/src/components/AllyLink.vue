<template>
  <h1 class="error-message">IN DEVELOPMENT - version in active dev: 1.1.0 </h1>
  <div class="heading-box">
    <h1>QA Update Automation</h1>
    <p>Center for Instructional Design and Innovation - USU</p>
    <p>Created and maintained by Emma Lynn (a02391851@usu.edu)</p>
    <a href="https://github.com/emmalynnnn/cidi-monday-QA-automation">[Source]</a>
  </div>

  <br>

  <h2>Get the Ally Download Link</h2>

  <div id="ally-box" class="feature-box blue">
    <br>

    <form @submit.prevent="getAllyLink" >
      <h4>Ally Client ID</h4>
      <input type="text" id="ally-client-id" name="ally-client-id" class="form-control">
      <br>

      <h4>Ally Consumer Key</h4>
      <input type="text" id="ally-consum-key" name="ally-consum-key" class="form-control">
      <input name="check" class="visually-hidden" tabindex="-1" autocomplete="off">
      <br>

      <h4>Ally Consumer Secret</h4>
      <input type="text" id="ally-consum-sec" name="ally-consum-sec" class="form-control">
      <br>

      <h4>Term Code</h4>
      <input type="text" id="term-code" name="term-code" class="form-control">
      <br>

      <button type="submit" class="btn btn-light button">Get Link</button>
    </form>
    <br>
    <p>Note: it may take a few minutes for the link to be generated.</p>

    <p v-if="error1" class="error-message">{{ error1 }}</p>

    <a v-if="link" :href="link">Click here to download the Ally Accessibility report</a>
    <div v-if="linkLoading">
      <p>Loading...</p>
      <LoadingBar/>
    </div>

  </div>
  <a class="btn btn-dark button" href="/box-login">Next</a>
  <br>
  <br>
  <p>Something not working right?</p>
  <a class="btn btn-dark button" href="/bug-report">Fill out a bug report form</a>
</template>

<script>
/* eslint-disable */
import LoadingBar from "./LoadingBar.vue";
import Heading from './HeadingComponent.vue';
export default {
  name: 'AllyLinkComponent',
  emits: ["form-submitted"],
  components: {
    LoadingBar
  },
  data() {
    return {
      link: "",
      linkLoading: false,
      error1: "",
      SERVER_URL: "https://oue0h093bk.execute-api.us-east-2.amazonaws.com/dev/",
      uploadMessage: "",
      form: {
        method: '',
        icon: ''
      },
    }
  },
  created() {

  },
  methods: {
    getAllyLink(){
      this.error1 = "";

      let clientId = document.getElementById("ally-client-id").value;
      let consumKey = document.getElementById("ally-consum-key").value;
      let consumSec = document.getElementById("ally-consum-sec").value;
      let termCode = document.getElementById("term-code").value;

      if (!clientId || !consumKey || !consumSec || !termCode) {
        this.error1 = "All fields are required";
        return;
      }
      if (isNaN(clientId) || isNaN(termCode)) {
        this.error1 = "Invalid input";
        return;
      }

      console.log(clientId, consumSec, consumKey, termCode);

      this.linkLoading = true;

      let inputData = {clientId: clientId, consumKey: consumKey, consumSec: consumSec, termCode: termCode};
      this.postData(this.SERVER_URL + "get-ally-link", inputData)
          .then((data) => {
            console.log(data);
            data = data.body;
            console.log(data);
            if (data.error !== undefined) {
              this.error1 = "Operation failed. Please check your authentication and other inputs and try again. " +
                  "If the issue persists, contact your system admin.";
              this.linkLoading = false;
            } else {
              this.linkLoading = false;
              this.link = data.link;
            }
          }).catch(err => {
        console.log(err);
        this.tryLinkAgain(inputData, 0);
      });
    },
    tryLinkAgain(inputData, invocationCount) {
      this.postData(this.SERVER_URL + "get-ally-link", inputData)
          .then((data) => {
            console.log(data);
            data = data.body;
            console.log(data);
            if (data.error !== undefined) {
              this.error1 = "Operation failed. Please check your authentication and other inputs and try again. " +
                  "If the issue persists, contact your system admin.";
              this.linkLoading = false;
            } else {
              this.linkLoading = false;
              this.link = data.link;
            }
          }).catch(err => {
        console.log(err);
        if (invocationCount > 10) {
          this.linkLoading = false;
          this.error1 = "Operation failed. Please check your authentication and other inputs and try again. " +
              "If the issue persists, contact your system admin.";
        } else {
          this.tryLinkAgain(inputData, invocationCount + 1);
        }
      });
    },
    postData(url, data, contentType="application/json", stringify=true) {
      let theBody;
      if (stringify) {
        theBody = JSON.stringify(data);
      } else {
        theBody = data;
      }

      return fetch(url, {
        method: "POST",
        /*mode: "no-cors",*/
        cache: "no-cache",
        credentials: "same-origin",
        connection: "keep-alive",
        headers: {
          Accept: 'application.json',
          "Content-Type": contentType,
        },
        body: theBody
      })
          .then(res => {
            return res.json();
          })
          .then((obj) => {
            return obj;
          })
          .catch(err => {
            console.log(err);
          });
    }
  }
}
</script>