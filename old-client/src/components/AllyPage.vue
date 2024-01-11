<template>
  <MainHeader/>

  <h2>Get the Ally Download Link</h2>

  <div id="ally-box" class="feature-box blue">
    <br>

    <form @submit.prevent="getAllyLink">
      <h4>Ally Client ID</h4>
      <input type="text" id="ally-client-id" name="ally-client-id" class="form-control">
      <br>

      <h4>Ally Consumer Key</h4>
      <input type="text" id="ally-consum-key" name="ally-consum-key" class="form-control">
      <input name="check" class="visually-hidden" tabIndex="-1" autoComplete="off">
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

    <div v-if="link">
      <a :href="link">Click here to download the Ally Accessibility report</a><br><br>
    </div>
    <p v-if="message">{{ message }}</p>
    <div v-if="linkLoading">
      <LoadingBar/>
    </div>
  </div>

  <br>
  <h2>Upload the Ally File</h2>
  <div id="ally-box" class="feature-box blue">
    <br>
    <p>Unzip the Ally folder you just downloaded and upload the file called courses.csv here for processing.</p>
    <form id="upload-form">
      <input name="check" class="visually-hidden" tabIndex="-1" autoComplete="off">
      <input type="file" id="file-field" ref="file" name="files"/>
      <br><br>

      <button v-on:click="processAllyFile" class="btn btn-light button">Upload</button>
      <br><br>
      <div v-if="uploadPending">
        <p>Uploading...</p>
        <LoadingBar/>
      </div>

      <p v-if="error2" class="error-message">{{ error2 }}</p>
      <p v-if="uploadMessage">{{ uploadMessage }}</p>
    </form>

  </div>
  <a v-if="interactionID" class="btn btn-dark button" :href="nextPageLink">Next</a>
  <br>

  <BugFooter/>
</template>

<script>
/* eslint-disable */
import LoadingBar from "./LoadingComponent.vue";
import MainHeader from "./MainHeaderComponent.vue";
import BugFooter from "./BugFooterComponent.vue";
import {SERVER_URL} from '@/assets/constants.js';

let throttle = require('promise-ratelimit')(7000);

export default {
  name: 'AllyLinkComponent',
  emits: ["form-submitted"],
  components: {
    LoadingBar,
    MainHeader,
    BugFooter,
  },
  data() {
    return {
      link: "",
      linkLoading: false,
      error1: "",
      uploadMessage: "",
      form: {
        method: '',
        icon: ''
      },
      error2: '',
      message: '',
      interactionID: undefined,
      uploadPending: false,
    }
  },
  computed: {
    nextPageLink() {
      return "/box-login?interID=" + this.interactionID;
    }
  },
  methods: {
    processAllyFile: function (e) {
      console.log("Processing file");
      this.uploadPending = true;
      this.error2 = "";

      let formElement = document.querySelector('#upload-form');
      let request = new XMLHttpRequest();
      let data = new FormData(formElement);

      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          this.callback(request.response);
        }
      };

      request.open('POST', SERVER_URL + 'process-ally-file', true);
      request.withCredentials = true;
      request.send(data);
      e.preventDefault();
      e.stopPropagation();

    },
    callback(res) {
      let response = JSON.parse(res);
      response = response.body;
      console.log(response);
      console.log(response.message);
      this.uploadPending = false;
      if (response.message !== 'Upload successful') {
        this.uploadMessage = "Error: " + response.message;
      } else {
        this.uploadMessage = "Upload successful.";
        this.interactionID = response.interactionID;
      }
    },
    getAllyLink() {
      this.error1 = "";

      let clientId = document.getElementById("ally-old-client-id").value;
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
      let invocationCount = 0;

      this.doRecursiveLink(inputData, invocationCount)
          .then(resp => {
            console.log("done with this: " + resp);
          })
    },
    async doRecursiveLink(inputData, invocationCount) {
      this.postData(SERVER_URL + "get-ally-link", inputData)
          .then((data) => {
            data = data.body;
            console.log(data);
            if (data.error !== undefined) {
              this.error1 = "Operation failed. Please check your authentication and other inputs and try again. " +
                  "If the issue persists, contact your system admin.";
              this.linkLoading = false;
            } else {
              if (data.done === 'true') {
                this.linkLoading = false;
                this.link = data.link;
                this.message = "";
                console.log(`Got it!! ${this.link}`);
              } else {
                this.message = data.link;
                throttle()
                    .then(resp => {
                      console.log("Trying again: " + resp);

                      if (invocationCount > 80) {
                        this.linkLoading = false;
                        this.error1 = "Operation failed. Please check your authentication and other inputs and try again. " +
                            "If the issue persists, contact your system admin.";
                      } else {
                        this.doRecursiveLink(inputData, invocationCount + 1);
                      }
                    });
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
    },
    postData(url, data, contentType = "application/json", stringify = true) {
      let theBody;
      if (stringify) {
        theBody = JSON.stringify(data);
      } else {
        theBody = data;
      }

      return fetch(url, {
        method: "POST",
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