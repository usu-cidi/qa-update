<template>
  <MainHeader/>

  <div class="feature-box blue">
    <br>
    <div v-if="updateInProgress">
      <h2>Update in progress...</h2>
      <p>The Monday Board will be updated automatically using the API. Each row will be given the "Updated" status when the row has been updated.</p>

      <BigLoading/>
    </div>

    <div v-if="updateComplete">
      <h2>Update successfully initiated!</h2>
      <p>You will recieve an email when the update is complete.</p>
    </div>

    <h2 v-if="error" class="error-message">Error completing update.</h2>

    <p v-if="responseMessage">{{responseMessage}}</p>

  </div>

  <br>

  <a class="btn btn-dark button" href="/">Back &lt;</a>
  <p v-if="updateInProgress">(Update process will continue if incomplete!)</p>

  <br>
  <p>Something not working right?</p>
  <a class="btn btn-dark button" href="/bug-report">Fill out a bug report form</a>
</template>

<script>
/* eslint-disable */
import BigLoading from "./BigLoading.vue";
import MainHeader from "./MainHeader.vue";
import {SERVER_URL} from "@/assets/constants";
export default {
  name: 'InProgressComponent',
  components: {
    BigLoading,
    MainHeader,
  },
  data () {
    return {
      updateInProgress: true,
      updateComplete: false,
      //SERVER_URL: "http://localhost:8000/",
      SERVER_URL: SERVER_URL,
      responseMessage: "",
      error: false,
    }
  },
  mounted() {
    console.log("Hello from the update!!");

    let monAPIKey = this.$route.query.monAPIKey;
    let updateType = this.$route.query.updateType;
    let monBoardId = this.$route.query.monBoardId;
    let crBoxId = this.$route.query.crBoxId;
    let email = this.$route.query.email;

    let inputData = {'trigger-type': updateType, 'board-id': monBoardId, 'cr-box-id': crBoxId, 'mon-api-key': monAPIKey, 'email': email};
    this.postData(this.SERVER_URL + "update", inputData)
        .then((response) => {
          if (response === undefined) {
            console.log("504 Gateway Timeout - update probably still initiated though")
            this.updateInProgress = false;
            this.error = true;
            this.responseMessage = "Please contact your developer by filling out a bug report form below. " +
                "Include the following message: 504 Gateway Timeout";
            return;
          }
          response = response.body;
          console.log(response);
          this.updateInProgress = false;
          if (response.updateStatus === "Successfully initiated") {
            console.log("Initiation complete");
            this.updateComplete = true;
          } else if (response.updateStatus === "Incomplete (error)") {
            this.error = true;
            this.responseMessage = "Please contact your developer by filling out a bug report form below. " +
                "Include the following message: ";
          } else if (response.updateStatus !== "Successfully initiated") {
            this.error = true;
            this.responseMessage = "Please contact your developer by filling out a bug report form below. " +
                "Include the following message: " + response.updateStatus;
          }
          if (response.result) {
            this.responseMessage += (" " + response.result);
          }
        }).catch(err => {
      console.log(err);
      this.updateInProgress = false;
      this.responseMessage = "Error, please contact your developer by filling out a bug report form below. " +
          "Include the following message: " + err;
    });
  },
  methods:{
    postData(url, data, contentType="application/json", stringify=true) {
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
  },
}
</script>
